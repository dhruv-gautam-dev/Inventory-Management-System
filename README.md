Inventory Management System with Wishlist & Cart

📌 Project Overview

This is a simple yet powerful Inventory Management System built using React and Tailwind CSS. It allows users to browse products, add them to their cart, and save items to a wishlist for future purchases.

🚀 Features

🛍 Product Listing - Browse available products.

🛒 Cart Management - Add and remove items from the cart.

❤️ Wishlist Feature - Save favorite products for later.



🎨 Responsive Design - Fully optimized for mobile and desktop.

📂 Project Structure

/src
│── /components
│    ├── Navbar.jsx
│    ├── ProductCard.jsx
│── /context
│    ├── CartContext.jsx
│    ├── WishlistContext.jsx
│── /pages
│    ├── Home.jsx
│    ├── CartPage.jsx
│    ├── WishlistPage.jsx
│── App.jsx
│── index.js

🛠 Installation & Setup

Clone the repository:

git clone https://github.com/your-username/inventory-management.git
cd inventory-management

Install dependencies:

npm install

Start the development server:

npm run dev

🎨 Tailwind CSS Configuration

Make sure Tailwind CSS is properly set up:

tailwind.config.js

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

📜 Usage

Add products to cart by clicking Add to Cart.

Save products for later by clicking Add to Wishlist.

Navigate using the navbar for Wishlist & Cart.

💡 Future Enhancements

✅ User authentication for personalized carts.

✅ Backend integration for database storage.

✅ Admin dashboard to manage inventory.

📜 License

This project is open-source under the MIT License.

✨ Happy Coding! 🚀
