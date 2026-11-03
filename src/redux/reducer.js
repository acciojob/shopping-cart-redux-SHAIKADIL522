import * as T from "./actions";

// ⚠ Replace with the codes from the README / Cypress tests
const COUPONS = { SAVE10: 10, SAVE20: 20 };

const initialState = { cart: [], wishlist: [], coupon: null };

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case T.ADD_TO_CART: {
      const exists = state.cart.find((i) => i.id === payload.id);
      return {
        ...state,
        cart: exists
          ? state.cart.map((i) => (i.id === payload.id ? { ...i, qty: i.qty + 1 } : i))
          : [...state.cart, { ...payload, qty: 1 }],
      };
    }
    case T.REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter((i) => i.id !== payload) };

    case T.INCREASE_QTY:
      return {
        ...state,
        cart: state.cart.map((i) => (i.id === payload ? { ...i, qty: i.qty + 1 } : i)),
      };

    case T.DECREASE_QTY:
      return {
        ...state,
        cart: state.cart
          .map((i) => (i.id === payload ? { ...i, qty: i.qty - 1 } : i))
          .filter((i) => i.qty > 0), // or keep min 1, check what tests expect
      };

    case T.TOGGLE_WISHLIST: {
      const inList = state.wishlist.some((i) => i.id === payload.id);
      return {
        ...state,
        wishlist: inList
          ? state.wishlist.filter((i) => i.id !== payload.id)
          : [...state.wishlist, payload],
      };
    }
    case T.APPLY_COUPON: {
      const code = payload.trim().toUpperCase();
      return {
        ...state,
        coupon: COUPONS[code] ? { code, percent: COUPONS[code] } : null,
      };
    }
    default:
      return state;
  }
}