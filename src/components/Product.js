import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import Button from "./Button";

function Product() {
  const [product, setProduct] = useState({});

  const limitedStock = 10;
  const properStockMarkup = <p className="product-page-stock">Stock: {product.stock}</p>;
  const limitedStockMarkup = <p className="product-page-stock">Stock: {product.stock}</p>;

  useEffect(() => {
    fetchData();
  });
  const urlParams = useParams();

  const fetchData = () => {
    fetch(`https://dummyjson.com/products/${urlParams.productID}`)
      .then((res) => res.json())
      .then((productData) => {
        setProduct(productData);
      })
      .catch((error) => console.error(error));
  };

  return (
    <section className="container">
      <div className="product-grid">
        <img src={product.thumbnail} alt={product.title} />
        <div className="product-details">
          <div className="flex">
            <h1 className="product-page-title">{product.title}</h1>
            <p className="product-rating">
              <AiFillStar />
              {product.rating}
            </p>
          </div>
          <p className="product-page-desc">{product.description}</p>
          <div className="flex" data-justify="left">
            <p className="product-page-price">${product.price}</p>
            {product.stock > limitedStock ? properStockMarkup : limitedStockMarkup}
          </div>
          <div className="flex" style={{ marginBlock: "2em" }}>
            <Button text="Add to Cart" type="add-to-cart" />
            <Button text="Buy Now" type="buy-now" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
