const SearchBar = ({ setSearchQuery }) => {
    return (
      <input
        type="text"
        placeholder="Search users..."
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
    );
  };
  
  export default SearchBar;
  