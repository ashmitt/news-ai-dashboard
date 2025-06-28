const categories = ["business", "technology", "sports", "health"];
function CategoryTabs({ onSelect }) {
  return (
    <div className="tabs">
      {categories.map(cat => (
        <button key={cat} onClick={() => onSelect(cat)}>{cat.toUpperCase()}</button>
      ))}
    </div>
  );
}
export default CategoryTabs;