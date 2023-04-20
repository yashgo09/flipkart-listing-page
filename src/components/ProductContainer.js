import React from "react";
import ProductCard from "./ProductCard";
import allProducts from "../data";

function ProductContainer() {
  console.log(allProducts);
  return (
    <section className="product-container">
      {allProducts.map((product) => (
        <ProductCard
          title={product.title}
          description={product.description}
          imageURL={product.images[0]}
          price={product.price}
          rating={product.rating}
          category={product.category}
          discount={product.discountPercentage}
        />
      ))}
    </section>
  );
}

export default ProductContainer;
