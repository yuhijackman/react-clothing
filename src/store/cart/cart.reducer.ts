import { AnyAction } from "redux";
import { setIsCartOpen, setCartItems } from "./cart.action";
import { CartItem } from "./cart.types";

export type CartState = {
  isCartOpen: boolean;
  cartItems: CartItem[];
};

const INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: []
};

export const cartReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (setCartItems.match(action.type)) {
    return {
      ...state,
      cartItems: action.payload
    };
  }

  if (setIsCartOpen.match(action.type)) {
    return {
      ...state,
      isCartOpen: action.payload
    };
  }

  return state;
};
