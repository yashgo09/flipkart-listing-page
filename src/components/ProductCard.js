import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Button from "./Button";

function ProductCard({ title, description, imageURL, price, rating, category, discount }) {
  return (
    <div className="product-card">
      <AiOutlineHeart className="like-button" />
      {/* <AiFillHeart className="like-button" color="red" /> */}
      <img src={imageURL} className="product-img" />
      <p className="product-title">{title}</p>
      <p className="product-description">{description}</p>
      <div className="flex">
        <p className="product-price">&#8377; {price}</p>
        <p className="product-rating">Ratings: {rating}</p>
      </div>
      <div className="flex">
        <p className="product-category">{category}</p>
        <p className="product-discount">{discount}</p>
      </div>
      <Button text="Add to Cart" />
    </div>
  );
}

export default ProductCard;
