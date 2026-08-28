import { Grid2, Moon, SearchNormal, Sun } from '@abez/icons';

interface HeaderProps {
  total: number;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  query: string;
  onQueryChange: (q: string) => void;
  searchRef: React.RefObject<HTMLInputElement>;
}

export default function Header({ total, theme, onToggleTheme, query, onQueryChange, searchRef }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="topbar">
        <div className="brand">
          <span className="brand-mark">
            <Grid2 size={18} />
          </span>
          <span className="brand-name">
            <span className="brand-dim">@abez</span>/icons
          </span>
        </div>
        <div className="topbar-right">
          <span className="count-pill">{total} icons</span>
          <button className="icon-btn" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </div>

      <div className="hero">
        <h1>Icons for React, done consistently.</h1>
        <p>A clean, tree-shakeable icon set — every icon at the same weight, the same grid, one import away.</p>
        <div className="search-wrap">
          <SearchNormal size={18} className="search-icon" />
          <input
            ref={searchRef}
            className="search-input"
            placeholder={`Search ${total} icons… (press /)`}
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            spellCheck={false}
          />
          {query && (
            <button className="search-clear" onClick={() => onQueryChange('')} aria-label="Clear search">
              ×
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
