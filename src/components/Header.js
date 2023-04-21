import React from "react";
import SearchBar from "./SearchBar";

function Header({ setSearchValue }) {
  return (
    <header>
      <span className="brand">Flipkart</span>
      <SearchBar setSearchValue={setSearchValue} />
      <ul className="menu">
        <li>Home</li>
        <li>Cart</li>
      </ul>
    </header>
  );
}

export default Header;
