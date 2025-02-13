import React, { useContext } from "react";

import { CartContext } from "../context/CartContext.jsx";

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-white p-4 rounded-lg shadow-md mb-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-md object-cover"
            />
            <div className="ml-4 flex-1">
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-gray-600">${item.price}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
