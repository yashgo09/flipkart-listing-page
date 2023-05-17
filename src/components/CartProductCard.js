import React, { useState } from "react";
import Button from "./Button";
import RemoveFromCartButton from "./RemoveFromCartButton";

function CartProductCard({ productDetails, setCartPrice }) {
  const { id, title, imageURL, discount, price } = productDetails;

  const [quantity, setQuantity] = useState(1);
  if (quantity < 1) setQuantity(1);

  const discountInCurrency = Math.round(price * discount) / 100;
  const discountedPrice = price - discountInCurrency;

  const totalProductPrice = discountedPrice * quantity;
  const totalProductDiscount = discountInCurrency * quantity;

  // setCartPrice(totalProductPrice);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => prev - 1);
  };

  const handleChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  return (
    <div className="cart-products__card">
      <img src={imageURL} alt={title} />
      <div className="cart-products__details">
        <p className="cart-products__title">{title}</p>
        <p className="cart-products__discount">{discount}% off</p>
        <p className="cart-products__price">${price}</p>
        <div className="cart-products__controls">
          <div className="cart-products__controls--quantity">
            <Button text="-" type="round" clickHandler={decreaseQuantity} />
            <input type="number" min="1" value={quantity} onChange={handleChange} />
            <Button text="+" type="round" clickHandler={increaseQuantity} />
          </div>
          <Button text="Save For Later" type="default" />
          <RemoveFromCartButton productId={id} />
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;
