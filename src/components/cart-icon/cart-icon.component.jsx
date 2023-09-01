import { useDispatch } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  selectIsCartOpen,
  selectCartCount
} from "../../store/cart/cart.selector";

import {
  CartIconContainer,
  CartShoppingIcon,
  CartItemCount
} from "./cart-icon.styles.jsx";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const cartIconClickHandler = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartIconContainer onClick={cartIconClickHandler}>
      <CartShoppingIcon />
      <CartItemCount>{cartCount}</CartItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
