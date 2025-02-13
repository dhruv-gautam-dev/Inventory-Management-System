import React from "react";
import ProductList from "../components/ProductList.jsx";
const Home = () => {
  return (
    <div className=" container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Inventory Management</h1>
      <ProductList />
    </div>
  );
};

export default Home;
