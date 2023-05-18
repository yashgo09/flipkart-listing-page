import React, { useContext, useState } from "react";
import ProductCard from "./ProductCard";
import { ProductsData, ThemeContext } from "../Contexts";
import SortProducts from "./SortProducts";
import Filter from "./Filter";

function ProductContainer() {
  const { allProducts } = useContext(ProductsData);
  const { theme, searchQuery } = useContext(ThemeContext);

  const [filters, setFilters] = useState([]);
  const [sortDirection, setSortDirection] = useState("");

  const productsList = allProducts
    .filter((product) => {
      if (filters[0]) return filters.includes(product.brand);
      else return true;
    })
    .filter((product) => {
      const title = product.title.toLowerCase();
      if (searchQuery) {
        return title.includes(searchQuery.toLowerCase());
      }
      return true;
    });

  if (sortDirection) {
    if (sortDirection === "asc") productsList.sort((a, b) => a.price - b.price);
    else productsList.sort((a, b) => b.price - a.price);
  }

  return (
    <main className="home-main">
      <Filter allProducts={allProducts} setFilters={setFilters} filters={filters} />
      <section className="product-container" data-theme={theme}>
        <div className="products-sort-option">
          <SortProducts setSortDirection={setSortDirection} />
        </div>
        {productsList &&
          productsList.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              imageURL={product.images[0]}
              price={product.price}
              rating={product.rating}
              stock={product.stock}
              discount={product.discountPercentage}
            />
          ))}
      </section>
    </main>
  );
}

export default ProductContainer;
