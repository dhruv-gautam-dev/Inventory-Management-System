// import "./index.css";
import "./App.css";
import Home from "./pages/Home.jsx";
import CartPage from "./pages/CartPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
function App() {
  console.log("app components rerendered ");
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
