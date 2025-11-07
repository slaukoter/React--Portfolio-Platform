const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search">
      <label htmlFor="search-input" className="search-label">
        Search Projects
      </label>
      <input
        id="search-input"
        type="text"
        className="search-input"
        placeholder="Search by title or client..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
