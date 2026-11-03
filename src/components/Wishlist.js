import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist, addToCart } from "../redux/actions";

export default function Wishlist() {
  const wishlist = useSelector((s) => s.wishlist);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Wishlist</h2>
      {wishlist.map((p) => (
        <div key={p.id}>
          <span>{p.name} - ₹{p.price}</span>
          <button onClick={() => dispatch(addToCart(p))}>Move to Cart</button>
          <button onClick={() => dispatch(toggleWishlist(p))}>Remove</button>
        </div>
      ))}
    </div>
  );
}