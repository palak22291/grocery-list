import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for recipes,ingredients, or grocery items..."
      />
      <button className="search-button">
        🔍
      </button>
    </div>
  );
};

export default SearchBar;
