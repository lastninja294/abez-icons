// Ingests a folder of manually-exported Figma SVGs (e.g. an unzipped batch
// export like "vuesax/linear/<name>.svg") into packages/icons/svg/.
// Usage: tsx scripts/ingest-manual-export.ts <path-to-unzipped-folder> [--dest=svg-bold]
import { mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

const destArg = process.argv.find((a) => a.startsWith('--dest='));
const destName = destArg ? destArg.slice('--dest='.length) : 'svg';
const ICONS_DIR = path.resolve(import.meta.dirname, '../packages/icons', destName);

function slugify(name: string) {
  return name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function findSvgFiles(dir: string, acc: string[] = []) {
  for (const entry of await readdir(dir)) {
    const full = path.join(dir, entry);
    const s = await stat(full);
    if (s.isDirectory()) await findSvgFiles(full, acc);
    else if (entry.toLowerCase().endsWith('.svg')) acc.push(full);
  }
  return acc;
}

async function main() {
  const srcDir = process.argv[2];
  if (!srcDir) {
    console.error('Usage: tsx scripts/ingest-manual-export.ts <path-to-unzipped-folder>');
    process.exit(1);
  }

  const files = await findSvgFiles(path.resolve(srcDir));
  if (files.length === 0) {
    console.log('No .svg files found under', srcDir);
    return;
  }

  await mkdir(ICONS_DIR, { recursive: true });

  let added = 0;
  let skipped = 0;
  for (const file of files) {
    const name = slugify(path.basename(file, '.svg'));
    const dest = path.join(ICONS_DIR, `${name}.svg`);
    try {
      await stat(dest);
      skipped++;
      console.log(`  ○ ${name} (already have, skipped)`);
      continue;
    } catch {
      // doesn't exist yet, proceed
    }
    const content = await readFile(file, 'utf-8');
    await writeFile(dest, content, 'utf-8');
    added++;
    console.log(`  ✓ ${name}`);
  }

  console.log(`\nAdded ${added}, skipped ${skipped} (already present).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
