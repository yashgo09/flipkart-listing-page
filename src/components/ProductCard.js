import React, { useContext } from "react";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
// import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ThemeContext, CartContext } from "../Contexts";
import AddToCartButton from "./AddToCartButton";
import RemoveFromCartButton from "./RemoveFromCartButton";

function ProductCard({ id, title, description, imageURL, price, rating, stock, discount }) {
  const { theme } = useContext(ThemeContext);

  const addButton = (
    <AddToCartButton
      productDetails={{ id, title, description, imageURL, price, rating, stock, discount }}
    />
  );
  const removeButton = <RemoveFromCartButton productId={id} />;

  let actionButton = addButton;

  const { cartItems } = useContext(CartContext);

  cartItems.forEach((item) => {
    if (id === item.id) {
      actionButton = removeButton;
    }
  });

  return (
    <div className="product-card" data-theme={theme}>
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
      {actionButton}
    </div>
  );
}

export default ProductCard;
