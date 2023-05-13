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

  console.log(cartItems);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <CartContext.Provider value={{ cartItems, addToCart }}>
          <Header cartItemCount={cartItems.length} />
          <Outlet />
        </CartContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default Root;
