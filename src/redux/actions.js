export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREASE_QTY = "INCREASE_QTY";
export const DECREASE_QTY = "DECREASE_QTY";
export const TOGGLE_WISHLIST = "TOGGLE_WISHLIST";
export const APPLY_COUPON = "APPLY_COUPON";

export const addToCart = (product) => ({ type: ADD_TO_CART, payload: product });
export const removeFromCart = (id) => ({ type: REMOVE_FROM_CART, payload: id });
export const increaseQty = (id) => ({ type: INCREASE_QTY, payload: id });
export const decreaseQty = (id) => ({ type: DECREASE_QTY, payload: id });
export const toggleWishlist = (product) => ({ type: TOGGLE_WISHLIST, payload: product });
export const applyCoupon = (code) => ({ type: APPLY_COUPON, payload: code });