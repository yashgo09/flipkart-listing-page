import React from "react";

function SearchBar({ setSearchValue }) {
  function handleChange(e) {
    setSearchValue(e.target.value);
  }
  return (
    <input
      type="search"
      className="header-search"
      placeholder="Search here"
      onChange={(e) => handleChange(e)}
    />
  );
}

export default SearchBar;
