import React from "react";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
// import { AiFillHeart } from "react-icons/ai";
import Button from "./Button";
import { Link } from "react-router-dom";

function ProductCard({ title, description, imageURL, price, rating, stock, discount, id }) {
  return (
    <div className="product-card">
      <AiOutlineHeart className="like-button" />
      {/* <AiFillHeart className="like-button" color="red" /> */}
      <Link to={`/products/${id}`}>
        <img src={imageURL} alt={title} className="product-img" />
      </Link>
      <Link to={`/products/${id}`} className="product-link">
        <p className="product-title">{title}</p>
      </Link>
      <p className="product-description">{description}</p>
      <div className="flex">
        <p className="product-price">${price}</p>
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
