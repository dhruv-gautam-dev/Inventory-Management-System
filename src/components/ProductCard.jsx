import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { FiHeart, FiShoppingCart } from "react-icons/fi";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-sm">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-fill rounded-md"
      />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>

      <div className="flex justify-between mt-3">
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FiShoppingCart /> Add to Cart
        </button>
        <button
          onClick={() =>
            isWishlisted
              ? removeFromWishlist(product.id)
              : addToWishlist(product)
          }
          className={`px-4 py-2 rounded-md ${
            isWishlisted ? "bg-red-500 text-white" : "bg-gray-200 text-black"
          }`}
        >
          <FiHeart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
