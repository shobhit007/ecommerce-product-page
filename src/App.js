import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/product/Product";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (data) => {
    setCart((preValues) => [...preValues, data]);
  };

  const removeItemFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <>
      <Navbar cart={cart} removeItemFromCart={removeItemFromCart} />
      <Product addToCart={addToCart} />
    </>
  );
}

export default App;
