import React from "react";

function Filter({ allProducts, setFilters, filters }) {
  let key = 0;
  const brands = allProducts.map((prod) => prod.brand);
  const uniqueBrands = [...new Set(brands)];

  const handleChange = (e) => {
    // console.log(e.target.value);
    const indexOfBrandInArray = filters.indexOf(e.target.value);
    if (e.target.checked) setFilters((prev) => [...prev, e.target.value]);
    else {
      if (indexOfBrandInArray) {
        setFilters((prev) => [
          ...prev.slice(0, indexOfBrandInArray),
          ...prev.slice(indexOfBrandInArray + 1),
        ]);
      } else {
        setFilters([]);
      }
    }
  };
  return (
    <aside className="filter-container">
      <h1>Filter</h1>
      <h2>Brand</h2>
      <ul className="brand-filter">
        {uniqueBrands.map((brand) => (
          <li key={key++}>
            <input type="checkbox" value={brand} onChange={handleChange} />
            {brand}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Filter;
