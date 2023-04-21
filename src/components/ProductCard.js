import React from "react";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";
import Button from "./Button";

function ProductCard({ title, description, imageURL, price, rating, stock, discount }) {
  return (
    <div className="product-card">
      <AiOutlineHeart className="like-button" />
      {/* <AiFillHeart className="like-button" color="red" /> */}
      <img src={imageURL} className="product-img" />
      <p className="product-title">{title}</p>
      <p className="product-description">{description}</p>
      <div className="flex">
        <p className="product-price">&#8377;{price}</p>
        <p className="product-rating">
          <AiFillStar />
          {rating}
        </p>
      </div>
      <div className="flex">
        <p className="product-stock">Stock: {stock}</p>
        <p className="product-discount">{discount}%</p>
      </div>
      <Button text="Add to Cart" type="add-to-cart" />
    </div>
  );
}

export default ProductCard;
