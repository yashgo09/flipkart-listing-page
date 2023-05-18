import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ProductsData, ThemeContext } from "../Contexts";
import SortProducts from "./SortProducts";

function ProductContainer() {
  const { allProducts } = useContext(ProductsData);
  const { theme, searchQuery } = useContext(ThemeContext);

  const [sortDirection, setSortDirection] = useState("");

  const productsList = allProducts.filter((product) => {
    const title = product.title.toLowerCase();
    if (searchQuery) {
      return title.includes(searchQuery.toLowerCase());
    }
    return product;
  });

  if (sortDirection) {
    if (sortDirection === "asc") productsList.sort((a, b) => a.price - b.price);
    else productsList.sort((a, b) => b.price - a.price);
  }

  return (
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
  );
}

export default ProductContainer;
