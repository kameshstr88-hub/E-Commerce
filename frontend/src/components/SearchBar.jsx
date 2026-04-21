import React from "react";

const SearchBar = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Search products..." />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;