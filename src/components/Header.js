import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Header({ setSearchValue, cartItemCount }) {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <header className={theme}>
      <Link to="/" className="link">
        <span className="brand">Flipkart</span>
      </Link>
      {/* <SearchBar setSearchValue={setSearchValue} /> */}
      <ul className="menu">
        <Link to="/" className="link">
          <li>Home</li>
        </Link>
        <Link to="/deals" className="link">
          <li>Deals</li>
        </Link>
        <Link to="/cart" className="link">
          <li>
            Cart <span className="cart-item-count">{cartItemCount}</span>
          </li>
        </Link>
        <li>
          <button
            className="theme-btn"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <BsFillMoonStarsFill /> : <FaSun />}
          </button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
