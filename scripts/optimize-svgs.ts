import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { optimize } from 'svgo';

const ICONS_DIR = path.resolve(import.meta.dirname, '../packages/icons/svg');

const svgoConfig = {
  multipass: true,
  plugins: [
    { name: 'preset-default', params: { overrides: { removeViewBox: false } } },
    'removeDimensions',
    'removeXMLNS',
  ],
};

async function main() {
  const files = (await readdir(ICONS_DIR)).filter((f) => f.endsWith('.svg'));
  if (files.length === 0) {
    console.log('No SVGs found in packages/icons/svg. Run "pnpm fetch:figma" first.');
    return;
  }

  for (const file of files) {
    const filePath = path.join(ICONS_DIR, file);
    const raw = await readFile(filePath, 'utf-8');
    const { data } = optimize(raw, svgoConfig);
    await writeFile(filePath, data, 'utf-8');
    console.log(`  ✓ ${file}`);
  }

  console.log(`\nOptimized ${files.length} icons.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
