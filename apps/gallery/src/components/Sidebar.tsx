interface SidebarProps {
  categories: [string, number][];
  active: string | null;
  onSelect: (category: string | null) => void;
  totalCount: number;
}

export default function Sidebar({ categories, active, onSelect, totalCount }: SidebarProps) {
  return (
    <nav className="sidebar">
      <button className={active === null ? 'cat-row active' : 'cat-row'} onClick={() => onSelect(null)}>
        <span>All icons</span>
        <span className="cat-count">{totalCount}</span>
      </button>
      <div className="cat-divider" />
      {categories.map(([category, count]) => (
        <button
          key={category}
          className={active === category ? 'cat-row active' : 'cat-row'}
          onClick={() => onSelect(category)}
        >
          <span>{category}</span>
          <span className="cat-count">{count}</span>
        </button>
      ))}
    </nav>
  );
}
