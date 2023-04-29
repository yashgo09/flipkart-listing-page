import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function Header({ setSearchValue }) {
  return (
    <header>
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
      </ul>
    </header>
  );
}

export default Header;
