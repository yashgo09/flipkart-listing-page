import React, { useContext } from "react";
import Button from "./Button";
import { CartContext } from "../Contexts";

function RemoveFromCartButton({ productDetails }) {
  const { removeFromCart } = useContext(CartContext);

  return <Button text="Remove" type="danger" clickHandler={() => removeFromCart(productDetails)} />;
}

export default RemoveFromCartButton;
