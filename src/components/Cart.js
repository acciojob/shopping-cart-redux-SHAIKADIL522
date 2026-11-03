import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty, applyCoupon } from "../redux/actions";

export default function Cart() {
  const { cart, coupon } = useSelector((s) => s);
  const dispatch = useDispatch();
  const [code, setCode] = useState("");

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const discount = coupon ? (subtotal * coupon.percent) / 100 : 0;
  const total = subtotal - discount;

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((i) => (
        <div key={i.id}>
          <span>{i.name} - ₹{i.price} x {i.qty}</span>
          <button onClick={() => dispatch(increaseQty(i.id))}>+</button>
          <button onClick={() => dispatch(decreaseQty(i.id))}>-</button>
          <button onClick={() => dispatch(removeFromCart(i.id))}>Remove</button>
        </div>
      ))}
      <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Coupon" />
      <button onClick={() => dispatch(applyCoupon(code))}>Apply</button>
      <p>Subtotal: {subtotal}</p>
      {coupon && <p>Discount ({coupon.code}): -{discount}</p>}
      <p>Total: {total}</p>
    </div>
  );
}