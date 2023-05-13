import React, { useContext } from "react";
import Button from "./Button";
import { CartContext } from "../context/CartContext";

function CartProductCard({ productDetails }) {
  const { title, imageURL, discount, price } = productDetails;
  const { removeFromCart } = useContext(CartContext);
  return (
    <div className="cart-products__card">
      <img src={imageURL} alt={title} />
      <div className="cart-products__details">
        <p className="cart-products__title">{title}</p>
        <p className="cart-products__discount">{discount}% off</p>
        <p className="cart-products__price">${price}</p>
        <div className="cart-products__controls">
          <div className="cart-products__controls--quantity">
            <Button text="-" type="round" />
            <input type="text" />
            <Button text="+" type="round" />
          </div>
          <Button text="Save For Later" type="default" />
          <Button text="Remove" type="danger" clickHandler={() => removeFromCart(productDetails)} />
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;
