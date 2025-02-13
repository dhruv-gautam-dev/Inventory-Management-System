import React from "react";
import ProductCard from "./ProductCard.jsx";

const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "smartphone", price: 499 },
  { id: 3, name: "headphone", price: 99 },
];

const ProductList = () => {
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
