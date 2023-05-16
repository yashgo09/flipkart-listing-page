import React, { useContext } from "react";
import Button from "./Button";
import { CartContext } from "../Contexts";

function AddToCartButton({ productDetails }) {
  const { addToCart } = useContext(CartContext);
  const { id, title, imageURL, discount, price } = productDetails;

  return (
    <Button
      text="Add to Cart"
      type="add-to-cart"
      clickHandler={() => addToCart({ id, title, imageURL, discount, price })}
    />
  );
}

export default AddToCartButton;
