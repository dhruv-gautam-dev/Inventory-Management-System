import React, { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { Link } from "react-router-dom";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>
          Your wishlist is empty.{" "}
          <Link to="/" className="text-blue-500">
            Browse products
          </Link>
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {wishlist.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-fill rounded-md"
              />
              <h2 className="text-lg font-bold mt-2">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
