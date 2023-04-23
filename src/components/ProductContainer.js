import React from "react";
import ProductCard from "./ProductCard";
import allProducts from "../data";

function ProductContainer({ searchQuery }) {
  const productsList = allProducts.filter((product) => {
    const title = product.title.toLowerCase();
    if (searchQuery) {
      return title.includes(searchQuery);
    }
    return product;
  });
  return (
    <section className="product-container">
      {productsList.map((product) => (
        <ProductCard
          key={product.id}
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
