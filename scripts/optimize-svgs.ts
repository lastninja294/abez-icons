import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { optimize } from 'svgo';

const ICONS_DIRS = [
  path.resolve(import.meta.dirname, '../packages/icons/svg'),
  path.resolve(import.meta.dirname, '../packages/icons/svg-bold'),
];

const svgoConfig = {
  multipass: true,
  plugins: [
    { name: 'preset-default', params: { overrides: { removeViewBox: false } } },
    'removeDimensions',
    'removeXMLNS',
  ],
};

async function main() {
  let total = 0;
  for (const dir of ICONS_DIRS) {
    let files: string[];
    try {
      files = (await readdir(dir)).filter((f) => f.endsWith('.svg'));
    } catch {
      continue;
    }
    if (files.length === 0) continue;

    for (const file of files) {
      const filePath = path.join(dir, file);
      const raw = await readFile(filePath, 'utf-8');
      const { data } = optimize(raw, svgoConfig);
      await writeFile(filePath, data, 'utf-8');
      console.log(`  ✓ ${path.relative(process.cwd(), filePath)}`);
    }
    total += files.length;
  }

  if (total === 0) {
    console.log('No SVGs found in packages/icons/svg or svg-bold. Run "pnpm fetch:figma" first.');
    return;
  }

  console.log(`\nOptimized ${total} icons.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
