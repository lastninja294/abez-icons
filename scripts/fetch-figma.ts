import 'dotenv/config';
import { existsSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const FIGMA_PAGE_NAME = process.env.FIGMA_PAGE_NAME || 'Icons';
// When the icon set ships multiple style variants as a name segment
// (e.g. "vuesax/linear/wallet-add" vs "vuesax/bold/wallet-add"), set this to
// pull just one style and drop the prefix, e.g. FIGMA_ICON_STYLE=linear ->
// "wallet-add". Leave unset to use each component's full name as-is.
const FIGMA_ICON_STYLE = process.env.FIGMA_ICON_STYLE;

if (!FIGMA_TOKEN || !FIGMA_FILE_KEY) {
  console.error(
    'Missing FIGMA_TOKEN or FIGMA_FILE_KEY.\nCopy .env.example to .env and fill both in, then rerun.',
  );
  process.exit(1);
}

const ICONS_DIR = path.resolve(import.meta.dirname, '../packages/icons/svg');
const METADATA_PATH = path.resolve(import.meta.dirname, '../packages/icons/metadata.json');

interface FigmaNode {
  id: string;
  name: string;
  type: string;
  children?: FigmaNode[];
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Figma's image-export endpoint rate-limits fairly aggressively on large
// icon sets. Retry with backoff (honoring Retry-After when present) instead
// of failing the whole run partway through.
async function figmaGet(endpoint: string, attempt = 1): Promise<any> {
  const res = await fetch(`https://api.figma.com/v1${endpoint}`, {
    headers: { 'X-Figma-Token': FIGMA_TOKEN! },
  });
  if (res.status === 429) {
    if (attempt > 6) throw new Error(`Figma API rate limit exceeded after ${attempt} attempts on ${endpoint}`);
    const retryAfterHeader = Number(res.headers.get('retry-after'));
    const uncapped = Number.isFinite(retryAfterHeader) && retryAfterHeader > 0 ? retryAfterHeader : 2 ** attempt * 3;
    // A server-provided Retry-After can be absurdly large (e.g. a multi-day
    // render-quota cooldown) — cap what we'll actually sleep for so the
    // script fails fast instead of hanging for days.
    const MAX_WAIT_SECONDS = 60;
    const waitSeconds = Math.min(uncapped, MAX_WAIT_SECONDS);
    if (uncapped > MAX_WAIT_SECONDS) {
      console.log(
        `  Rate limited — server asked for a ${uncapped}s cooldown (likely a render-quota limit, not a transient throttle). Capping wait to ${waitSeconds}s; this will likely keep failing until the quota resets.`,
      );
    }
    console.log(`  Rate limited, waiting ${waitSeconds}s (attempt ${attempt}/6)...`);
    await sleep(waitSeconds * 1000);
    return figmaGet(endpoint, attempt + 1);
  }
  if (!res.ok) {
    throw new Error(`Figma API error ${res.status} on ${endpoint}: ${await res.text()}`);
  }
  return res.json();
}

function slugify(name: string) {
  return name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Icons should each be a Figma component. We stop recursing once we hit one,
// so a component's internal layers never get treated as separate icons.
function collectIconNodes(node: FigmaNode, acc: FigmaNode[] = []) {
  if (node.type === 'COMPONENT' || node.type === 'COMPONENT_SET') {
    acc.push(node);
    return acc;
  }
  for (const child of node.children ?? []) collectIconNodes(child, acc);
  return acc;
}

async function main() {
  console.log(`Fetching file ${FIGMA_FILE_KEY}...`);
  const file = await figmaGet(`/files/${FIGMA_FILE_KEY}`);

  const page =
    file.document.children.find((p: FigmaNode) => p.name === FIGMA_PAGE_NAME) ??
    file.document.children[0];
  if (!page) throw new Error('No pages found in this Figma file.');
  console.log(`Using page "${page.name}"`);

  const allNodes = collectIconNodes(page);
  if (allNodes.length === 0) {
    throw new Error(
      `No COMPONENT nodes found on page "${page.name}". Each icon should be a Figma component.`,
    );
  }

  // Resolve each node to its final slug, applying the style filter/prefix-strip
  // if configured, and drop duplicates (the same icon often appears under
  // multiple category frames in kits like this one) — first occurrence wins.
  const styleRe = FIGMA_ICON_STYLE ? new RegExp(`(^|/)${FIGMA_ICON_STYLE}/`, 'i') : null;
  const seen = new Map<string, FigmaNode>();
  let skippedByStyle = 0;
  let skippedDuplicate = 0;

  for (const node of allNodes) {
    let resolvedName: string;
    if (styleRe) {
      if (!styleRe.test(node.name)) {
        skippedByStyle++;
        continue;
      }
      const parts = node.name.split('/');
      resolvedName = slugify(parts[parts.length - 1]);
    } else {
      resolvedName = slugify(node.name);
    }
    if (seen.has(resolvedName)) {
      skippedDuplicate++;
      continue;
    }
    seen.set(resolvedName, node);
  }

  console.log(
    `Found ${allNodes.length} components -> ${seen.size} unique icons` +
      (skippedByStyle ? `, ${skippedByStyle} skipped (style filter)` : '') +
      (skippedDuplicate ? `, ${skippedDuplicate} skipped (duplicate name)` : '') +
      '.',
  );

  await mkdir(ICONS_DIR, { recursive: true });

  const iconEntries = [...seen.entries()]; // [resolvedName, node][]

  // Resumable: an icon whose SVG is already on disk (e.g. from a run that hit
  // a rate limit partway through) is skipped rather than re-fetched.
  const have = new Set<string>();
  for (const [name] of iconEntries) {
    if (existsSync(path.join(ICONS_DIR, `${name}.svg`))) have.add(name);
  }
  const pending = iconEntries.filter(([name]) => !have.has(name));
  console.log(`${have.size} already on disk, ${pending.length} to fetch.`);

  // Figma's image endpoint accepts many ids per call, but we chunk to stay well
  // under URL length limits on large icon sets, and pace requests to avoid
  // the export endpoint's rate limit.
  const chunks: [string, FigmaNode][][] = [];
  for (let i = 0; i < pending.length; i += 100) chunks.push(pending.slice(i, i + 100));

  for (const [chunkIndex, chunk] of chunks.entries()) {
    const ids = chunk.map(([, node]) => node.id).join(',');
    const { images } = await figmaGet(`/images/${FIGMA_FILE_KEY}?ids=${ids}&format=svg`);

    for (const [name, node] of chunk) {
      const url = images[node.id];
      if (!url) {
        console.warn(`  ✗ no SVG export for "${node.name}" (${node.id}), skipping.`);
        continue;
      }
      const svg = await (await fetch(url)).text();
      await writeFile(path.join(ICONS_DIR, `${name}.svg`), svg, 'utf-8');
      have.add(name);
      console.log(`  ✓ ${name}`);
    }

    if (chunkIndex < chunks.length - 1) await sleep(1500);
  }

  const metadata = iconEntries
    .filter(([name]) => have.has(name))
    .map(([name, node]) => ({ name, file: `${name}.svg`, figmaId: node.id }))
    .sort((a, b) => a.name.localeCompare(b.name));

  await writeFile(METADATA_PATH, JSON.stringify(metadata, null, 2) + '\n', 'utf-8');
  console.log(`\nSaved ${metadata.length} icons to packages/icons/svg/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
