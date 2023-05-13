import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ThemeContext } from "../context/ThemeContext";
// import allProducts from "../data";

function ProductContainer() {
  const [allProducts, setAllProducts] = useState([]);
  const { theme, searchQuery } = useContext(ThemeContext);

  useEffect(() => {
    fetchData();
  }, []);

  let productsList;

  const fetchData = () => {
    fetch("https://dummyjson.com/products")
      .then((data) =>
        data.json().then((jsonData) => {
          // console.log(jsonData.products);
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
