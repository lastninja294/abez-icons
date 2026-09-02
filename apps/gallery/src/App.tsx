import { useEffect, useMemo, useRef, useState } from 'react';
import * as Icons from '@abez/icons';
import metadata from '../../../packages/icons/metadata.json';
import DetailPanel from './components/DetailPanel';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import type { IconMeta } from './lib/icons';
import { primaryComponentName } from './lib/icons';

const ICONS = metadata as IconMeta[];
const IconComponents = Icons as unknown as Record<string, React.ComponentType<{ size?: number | string }>>;

const categoryCounts = new Map<string, number>();
for (const icon of ICONS) categoryCounts.set(icon.category, (categoryCounts.get(icon.category) ?? 0) + 1);
const CATEGORIES: [string, number][] = [...categoryCounts.entries()].sort((a, b) => b[1] - a[1]);

function getInitialTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  const stored = localStorage.getItem('abez-icons-theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme);
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selected, setSelected] = useState<IconMeta | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('abez-icons-theme', theme);
  }, [theme]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === '/' && document.activeElement !== searchRef.current) {
        e.preventDefault();
        searchRef.current?.focus();
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const missing = useMemo(() => ICONS.filter((icon) => !IconComponents[primaryComponentName(icon)]), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ICONS.filter((icon) => {
      if (activeCategory && icon.category !== activeCategory) return false;
      if (q && !icon.name.includes(q)) return false;
      return true;
    });
  }, [query, activeCategory]);

  const grouped = useMemo(() => {
    const byCategory = new Map<string, IconMeta[]>();
    for (const icon of filtered) {
      if (!byCategory.has(icon.category)) byCategory.set(icon.category, []);
      byCategory.get(icon.category)!.push(icon);
    }
    return CATEGORIES.filter(([c]) => byCategory.has(c)).map(([c]) => [c, byCategory.get(c)!] as const);
  }, [filtered]);

  return (
    <div className="site">
      <Header
        total={ICONS.length}
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        query={query}
        onQueryChange={setQuery}
        searchRef={searchRef}
      />

      {missing.length > 0 && (
        <div className="warning">
          {missing.length} metadata entries have no matching component: {missing.map((m) => m.name).join(', ')}
        </div>
      )}

      <div className="layout">
        <Sidebar categories={CATEGORIES} active={activeCategory} onSelect={setActiveCategory} totalCount={ICONS.length} />

        <main className="content">
          {grouped.length === 0 && <p className="empty">No icons match your search.</p>}
          {grouped.map(([category, icons]) => (
            <section key={category} className="cat-section">
              <h2>
                {category} <span className="badge">{icons.length}</span>
              </h2>
              <div className="grid">
                {icons.map((icon) => {
                  const Comp = IconComponents[primaryComponentName(icon)];
                  return (
                    <button key={icon.name} className="icon-tile" onClick={() => setSelected(icon)}>
                      <span className="icon-tile-glyph">{Comp ? <Comp size={22} /> : <span className="broken">✕</span>}</span>
                      <span className="icon-tile-label">{icon.name}</span>
                    </button>
                  );
                })}
              </div>
            </section>
          ))}
        </main>
      </div>

      {selected && <DetailPanel icon={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
