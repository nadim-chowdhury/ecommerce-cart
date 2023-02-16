import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";
import Signup from "./components/Signup";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/products/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
