import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white rounded-lg shadow-lg p-5 w-72 h-96 flex flex-col justify-between">
      {/* Image Container */}
      <div className="w-full h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Product Details */}
      <div className="text-center">
        <h2 className="text-xl font-bold mt-3">{product.name}</h2>
        <p className="text-gray-700 text-lg">${product.price}</p>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-600 transition-all"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
