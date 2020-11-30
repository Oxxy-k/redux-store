import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ numItems, total }) => {
  return (
    <header className="header row">
      <Link to="/">
        <div className="logo text-dark">BookStore</div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {numItems} items (${total})
        </div>
      </Link>
    </header>
  );
};

export default Header;
