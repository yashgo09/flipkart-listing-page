import React, { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { CartContext } from "../context/CartContext";

function Root() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newProduct) => {
    // console.log();
    setCartItems((existingProducts) => [...existingProducts, newProduct]);
  };

  const removeFromCart = (productToRemove) => {
    const productIndex = cartItems.indexOf(productToRemove);
    // console.log(productIndex);
    const arr = [...cartItems.slice(0, productIndex), ...cartItems.slice(productIndex + 1)];
    // console.log(arr);
    // setCartItems((existingProducts) => existingProducts.splice(1, 1));
    setCartItems(arr);
  };

  // console.log(cartItems);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
          <Header cartItemCount={cartItems.length} />
          <Outlet />
        </CartContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default Root;
