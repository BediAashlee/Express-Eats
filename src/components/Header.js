import React, { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      <div className="flex justify-between bg-rose-300 shadow-lg sm:bg-rose-300 md:bg-rose-300">
        <Logo />
        <div className="flex py-10 pr-10">
          <ul className="flex">
            <Link to="/">
              <li className="px-4">Home</li>
            </Link>
            <Link to="/about">
              <li className="px-4">About</li>
            </Link>
            <Link to="/contact">
              <li className="px-4">Contact</li>
            </Link>
            <Link to="/cart">
              <li className="pr-20 pl-4">Cart</li>
            </Link>
          </ul>
          {isLoggedIn ? (
            <button
              className="bg-rose-200 text-black hover:bg-rose-500 font-bold px-4 rounded"
              onClick={() => {
                setIsLoggedIn(false);
              }}
            >
              Logout
            </button>
          ) : (
            <button
              className="bg-rose-200 text-black hover:bg-rose-500 font-bold px-4 rounded"
              onClick={() => {
                setIsLoggedIn(true);
              }}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
