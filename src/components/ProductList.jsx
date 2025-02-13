import React from "react";
import ProductCard from "./ProductCard.jsx";

const products = [
  { id: 1, name: "Laptop", price: 1200, image: "src/assets/laptop.jpg" },
  { id: 2, name: "Phone", price: 800, image: "src/assets/SmartPhone.jpg" },
  { id: 3, name: "Mouse", price: 200, image: "src/assets/mouse.jpg" },
  { id: 4, name: "Headphone", price: 1200, image: "src/assets/Headphone.jpg" },
  { id: 5, name: "Watch", price: 800, image: "src/assets/Watch.jpg" },
  { id: 6, name: "Tablet", price: 200, image: "src/assets/tablet.jpg" },
  { id: 7, name: "Earbuds", price: 1200, image: "src/assets/Earbuds.jpg" },
  {
    id: 8,
    name: "Trendy Neckband",
    price: 800,
    image: "src/assets/Neckband.jpg",
  },
  { id: 9, name: "BT Speaker", price: 200, image: "src/assets/Speaker.jpg" },
  { id: 10, name: "Smart BT Ring", price: 1200, image: "src/assets/ring.jpg" },
  {
    id: 11,
    name: "mini Power Bank",
    price: 800,
    image: "src/assets/Watch.jpg",
  },
  {
    id: 12,
    name: "Play Station",
    price: 200,
    image: "src/assets/playstation.jpg",
  },
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
