import { defineConfig } from 'tsup';

export default defineConfig([
  {
    // One output file per input file (index + every icon) instead of a
    // single bundled dist/index.js. This lets ESM bundlers drop unused icon
    // *modules* wholesale via package.json's sideEffects:false, instead of
    // relying on dead-code elimination to prove each icon's forwardRef()
    // call is unused — the same layout lucide-react ships for its ESM build.
    entry: ['src/index.ts', 'src/icons/*.tsx', 'src/icons-bold/*.tsx'],
    bundle: false,
    format: ['esm'],
    dts: true,
    clean: true,
    sourcemap: true,
    external: ['react'],
  },
  {
    // require() can't be tree-shaken regardless of file layout, and our
    // source hardcodes `.js` extensions in relative imports (for ESM
    // resolution) that an unbundled CJS output can't rewrite to `.cjs` —
    // so ship CJS as a single self-contained bundle instead, same as
    // lucide-react's dist/cjs/lucide-react.js.
    entry: ['src/index.ts'],
    bundle: true,
    format: ['cjs'],
    dts: true,
    clean: false,
    sourcemap: true,
    external: ['react'],
  },
]);
