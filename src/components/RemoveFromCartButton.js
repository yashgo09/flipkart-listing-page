import React, { useContext } from "react";
import Button from "./Button";
import { CartContext } from "../Contexts";

function RemoveFromCartButton({ productId }) {
  const { removeFromCart } = useContext(CartContext);

  return <Button text="Remove" type="danger" clickHandler={() => removeFromCart(productId)} />;
}

export default RemoveFromCartButton;
