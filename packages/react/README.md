# @abez/icons

A clean, consistent icon set for React. 1872 components (903 icons, most available in both linear and bold styles), fully tree-shakeable.

## Install

```bash
npm install @abez/icons
```

## Usage

```tsx
import { ArrowRight, WalletAdd } from '@abez/icons';

function Example() {
  return (
    <button>
      Continue <ArrowRight size={16} />
    </button>
  );
}
```

Every icon accepts a `size` prop (default `24`) plus all standard SVG props. Color follows `currentColor` by default, so it inherits from CSS — set `color` on the icon or an ancestor, or pass `color` directly:

```tsx
<WalletAdd size={20} color="#2563eb" />
<div style={{ color: '#2563eb' }}>
  <WalletAdd size={20} />
</div>
```

## Icons

903 icons, most in two styles — linear (default) and bold (filled), suffixed with `Bold`:

```tsx
import { Send, SendBold } from '@abez/icons';

<Send />       {/* linear */}
<SendBold />   {/* bold/filled */}
```

A handful of icons only exist in bold (no linear source was exported), so they're only available as `...Bold`. Browse the full set at [abez-icons.vercel.app](https://abez-icons.vercel.app/).

Includes a "Company" and "Crypto Currency" set of brand/product logos (Apple, Google, Bitcoin, Ethereum, etc.), in both styles. These are trademarks of their respective owners, included for identification purposes only — this does not imply endorsement, and no trademark rights are granted. Check each brand's own guidelines before using their mark.

## Credits

Icon geometry is derived from the [Iconsax](https://iconsax.io) icon set.
