import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header flex justify-between items-center">
      <div className="logo uppercase text-3xl p-4 font-bold">
        <h1>
          <Link exact to="/">
            DarazOn
          </Link>
        </h1>
      </div>

      <div className="links text-lg">
        <Link exact to="/">
          Home
        </Link>
        <Link exact to="/signup">
          Sign Up
        </Link>
        <Link exact to="/cart">
          <i class="fa-solid fa-cart-shopping"></i>
        </Link>
      </div>
    </div>
  );
};

export default Header;
