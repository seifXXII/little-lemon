import React from "react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "../icons";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <button className="header-menu-btn" aria-label="Open menu">
          <HamburgerIcon />
        </button>

        <Link to="/" className="header-logo">
          <img src="/assets/icons/Logo.svg" alt="Little Lemon" />
        </Link>

        <button className="header-basket-btn" aria-label="View basket">
          <img src="/assets/icons/Basket.svg" alt="" />
        </button>
      </div>
    </header>
  );
}

export default Header;
