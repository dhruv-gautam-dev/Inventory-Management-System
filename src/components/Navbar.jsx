import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Inventory Management System
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-200 transition">
            Home
          </Link>
          <Link to="/cart" className="relative hover:text-gray-200 transition">
            <FiShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 py-1 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-3 space-y-3 text-center">
          <Link
            to="/"
            className="block hover:text-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/cart"
            className="block hover:text-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            Cart {cart.length > 0 && `(${cart.length})`}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
