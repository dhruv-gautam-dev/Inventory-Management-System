import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" bg-gray-800 p-4">
      <div>This is my nav Bar </div>
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white font-bold">
          Home
        </Link>
        <Link to="/cart" className="text-white">
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
