import React from "react";
import "./../styles/App.css";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

const App = () => (
  <div>
    <ProductList />
    <Cart />
    <Wishlist />
  </div>
);
export default App;