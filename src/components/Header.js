import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function Header({ setSearchValue, mode, setMode }) {
  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      localStorage.setItem("mode", "dark");
    } else {
      setMode("light");
      localStorage.setItem("mode", "light");
    }
  };
  return (
    <header className={mode}>
      <span className="brand">Flipkart</span>
      {/* <SearchBar setSearchValue={setSearchValue} /> */}
      <ul className="menu">
        <Link to="/" className="link">
          <li>Home</li>
        </Link>
        <Link to="/cart" className="link">
          <li>Cart</li>
        </Link>
        <Link to="/deals" className="link">
          <li>Deals</li>
        </Link>
        <li>
          <button onClick={changeMode}>{mode}</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
