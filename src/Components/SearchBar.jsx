const SearchBar = ({ searchInput, onChangeSearch }) => {
  return (
    <input
      type="search"
      value={searchInput}
      onChange={(event) => onChangeSearch(event.target.value)}
      placeholder="Search for a country..."
    />
  );
};

export default SearchBar;
