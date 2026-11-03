import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, toggleWishlist } from "../redux/actions";

const PRODUCTS = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Headphones", price: 2000 },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const wishlist = useSelector((s) => s.wishlist);

  return (
    <div>
      <h2>Products</h2>
      {PRODUCTS.map((p) => {
        const liked = wishlist.some((w) => w.id === p.id);
        return (
          <div key={p.id}>
            <span>{p.name} - ₹{p.price}</span>
            <button onClick={() => dispatch(addToCart(p))}>Add to Cart</button>
            <button onClick={() => dispatch(toggleWishlist(p))}>
              {liked ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        );
      })}
    </div>
  );
}