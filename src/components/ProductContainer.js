import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
// import allProducts from "../data";

function ProductContainer({ searchQuery }) {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  let productsList;

  const fetchData = () => {
    fetch("https://dummyjson.com/products")
      .then((data) =>
        data.json().then((jsonData) => {
          console.log(jsonData.products);
          setAllProducts(jsonData.products);
        })
      )
      .catch((error) => console.error(error));
  };

  productsList = allProducts.filter((product) => {
    const title = product.title.toLowerCase();
    if (searchQuery) {
      return title.includes(searchQuery.toLowerCase());
    }
    return product;
  });

  return (
    <section className="product-container">
      {productsList &&
        productsList.map((product) => (
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
