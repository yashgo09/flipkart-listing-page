import React, { useContext, useEffect } from "react";
import ProductCard from "./ProductCard";
import { ProductsData, ThemeContext } from "../Contexts";

function ProductContainer() {
  const { allProducts } = useContext(ProductsData);
  const { theme, searchQuery } = useContext(ThemeContext);

  const productsList = allProducts.filter((product) => {
    const title = product.title.toLowerCase();
    if (searchQuery) {
      return title.includes(searchQuery.toLowerCase());
    }
    return product;
  });

  return (
    <section className="product-container" data-theme={theme}>
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
