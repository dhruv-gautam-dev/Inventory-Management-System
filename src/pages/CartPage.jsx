import React, { useContext } from "react";

import { CartContext } from "../context/CartContext.jsx";

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your Cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="p-4 border  mb-2">
            <h2>
              {item.name}-${item.price}
            </h2>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white p-2"
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
