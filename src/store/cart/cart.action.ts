import { CategoryItem } from "../categories/categories.types";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import {
  ActionWithPayload,
  createAction,
  withMatcher
} from "../../utils/reducer/reducer.utils";

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
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

const removeCartItem = (
  cartItems: CartItem[],
  productId: CategoryItem["id"]
): CartItem[] => {
  return cartItems.filter((cartItem) => productId !== cartItem.id);
};

const removeOneCartItem = (
  cartItems: CartItem[],
  productId: CategoryItem["id"]
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productId
  );
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productId);
  }

  return cartItems.map((cartItem) => {
    if (productId !== cartItem.id) {
      return cartItem;
    }
    return { ...cartItem, quantity: cartItem.quantity - 1 };
  });
};

export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const setIsCartOpen = withMatcher(
  (active: boolean): SetIsCartOpen =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, active)
);

export const setCartItems = withMatcher((cartItems: CartItem[]) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeItemFromCart = (
  cartItems: CartItem[],
  productId: CategoryItem["id"]
) => {
  const newCartItems = removeCartItem(cartItems, productId);
  return setCartItems(newCartItems);
};

export const removeOneItemFromCart = (
  cartItems: CartItem[],
  productId: CategoryItem["id"]
) => {
  const newCartItems = removeOneCartItem(cartItems, productId);
  return setCartItems(newCartItems);
};
