import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
  const targetItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (targetItem === undefined) {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }

  return cartItems.map((cartItem) => {
    if (cartItem.id === productToAdd.id) {
      return { ...cartItem, quantity: cartItem.quantity + 1 };
    }
    return cartItem;
  });
};

const removeCartItem = (cartItems, productId) => {
  return cartItems.filter((cartItem) => productId !== cartItem.id);
};

const removeOneCartItem = (cartItems, productId) => {
  return cartItems
    .map((cartItem) => {
      if (productId !== cartItem.id) {
        return cartItem;
      }
      if (cartItem.quantity < 2) {
        return null;
      }
      return { ...cartItem, quantity: cartItem.quantity - 1 };
    })
    .filter((cartItem) => cartItem !== null);
};

export const setIsCartOpen = (active) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, active);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, productId) => {
  const newCartItems = removeCartItem(cartItems, productId);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeOneItemFromCart = (cartItems, productId) => {
  const newCartItems = removeOneCartItem(cartItems, productId);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
