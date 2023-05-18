import React from "react";

function SortProducts({ setSortDirection }) {
  function handleChange(e) {
    console.log(e.target.value);
    setSortDirection(e.target.value);
  }
  return (
    <label for="sortby">
      Sortby:
      <select id="sortby" className="sort-select" onChange={handleChange}>
        <option value="">No Sorting</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </label>
  );
}

export default SortProducts;
