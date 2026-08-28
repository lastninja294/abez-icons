# Mizan Icons

An icon library sourced from Figma, published as React components.

## How it works

```
Figma (components on a page)
  → pnpm fetch:figma    → packages/icons/svg/*.svg   (raw export)
  → pnpm optimize        → packages/icons/svg/*.svg   (cleaned in place, via SVGO)
  → pnpm codegen:react   → packages/react/src/**       (generated .tsx per icon)
  → pnpm build:react     → packages/react/dist/**      (ESM + CJS + .d.ts, via tsup)
```

`pnpm build` runs the last three steps. `pnpm sync` runs the whole pipeline including the Figma fetch.

## Setup

1. `cp .env.example .env`
2. Fill in `.env`:
   - `FIGMA_TOKEN` — a personal access token from Figma (Settings → Security → Personal access tokens). Needs read access to the file.
   - `FIGMA_FILE_KEY` — the id in your file's URL: `figma.com/file/<FILE_KEY>/...`
   - `FIGMA_PAGE_NAME` — the page holding your icons (defaults to `Icons`)
3. `pnpm install`
4. `pnpm sync`

## Requirements on the Figma side

Each icon must be a **Figma component** (not just a frame or group) living on the target page. The component's name becomes the icon's slug (e.g. "Arrow Right" → `arrow-right` → React export `ArrowRight`). Nested layers inside a component are not treated as separate icons.

## Packages

- `packages/icons` — source of truth: optimized SVGs + `metadata.json` (name, file, Figma node id).
- `packages/react` — generated, publishable `@abez/icons` package. Each icon is a tree-shakeable named export (`import { ArrowRight } from '@abez/icons'`) accepting standard `SVGProps<SVGSVGElement>` plus a `size` prop (default `24`). Colors resolve to `currentColor`.

## Regenerating after Figma changes

Just rerun `pnpm sync`. It re-fetches every icon, re-optimizes, regenerates all React components, and rebuilds — safe to run repeatedly.
