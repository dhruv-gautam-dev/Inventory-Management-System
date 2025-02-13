import React from "react";
import ProductCard from "./ProductCard.jsx";

const products = [
  { id: 1, name: "Laptop", price: 1200, image: "src/assets/laptop.jpg" },
  { id: 2, name: "Phone", price: 800, image: "src/assets/SmartPhone.jpg" },
  { id: 3, name: "Mouse", price: 200, image: "src/assets/mouse.jpg" },
  { id: 1, name: "Headphone", price: 1200, image: "src/assets/Headphone.jpg" },
  { id: 2, name: "Watch", price: 800, image: "src/assets/Watch.jpg" },
  { id: 3, name: "Tablet", price: 200, image: "src/assets/tablet.jpg" },
  { id: 1, name: "Laptop", price: 1200, image: "src/assets/laptop.jpg" },
  { id: 2, name: "Phone", price: 800, image: "src/assets/SmartPhone.jpg" },
  { id: 3, name: "Mouse", price: 200, image: "src/assets/mouse.jpg" },
  { id: 1, name: "Headphone", price: 1200, image: "src/assets/Headphone.jpg" },
  { id: 2, name: "Watch", price: 800, image: "src/assets/Watch.jpg" },
  { id: 3, name: "Tablet", price: 200, image: "src/assets/tablet.jpg" },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
