import React, { useContext } from "react";

import { CartContext } from "../context/CartContext.jsx";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border p-4">
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
