import React, { useState } from "react";
import Button from "./Button";
import RemoveFromCartButton from "./RemoveFromCartButton";

function CartProductCard({ productDetails }) {
  const { id, title, imageURL, discount, price } = productDetails;

  const [quantity, setQuantity] = useState(1);

  console.log(quantity);

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
            <input type="number" min="1" onChange={(e) => setQuantity(e.target.value)} />
            <Button text="+" type="round" />
          </div>
          <Button text="Save For Later" type="default" />
          <RemoveFromCartButton productId={id} />
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;
