import React from "react";

function ProductCard({ title, description, imageURL, price, rating }) {
  return (
    <div className="product-card">
      <img src={imageURL} className="product-img" />
      <p>{title}</p>
      <p>{description}</p>
      <p>{price}</p>
      <p>{rating}</p>
    </div>
  );
}

export default ProductCard;
