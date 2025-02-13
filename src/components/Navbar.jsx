import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { FiShoppingCart, FiHeart, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
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
          <Link
            to="/wishlist"
            className="relative hover:text-gray-200 transition"
          >
            <FiHeart size={24} />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 py-1 rounded-full">
                {wishlist.length}
              </span>
            )}
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
      </div>
    </nav>
  );
};

export default Navbar;
