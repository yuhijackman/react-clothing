import { useDispatch, useSelector } from "react-redux";

import {
  CheckoutItemContainer,
  CheckoutItemImageContainer,
  CheckoutItemImage,
  CheckoutItemName,
  CheckoutItemQuantity,
  CheckoutItemPrice
} from "./checkout-item.styles";
import Button from "../button/button.component";

import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  removeItemFromCart,
  removeOneItemFromCart
} from "../../store/cart/cart.action";

const CheckoutItem = ({ checkoutItem }) => {
  const { imageUrl, name, price, quantity } = checkoutItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const removeItemHandler = () => {
    dispatch(removeItemFromCart(cartItems, checkoutItem.id));
  };

  const removeOneItemHandler = () => {
    dispatch(removeOneItemFromCart(cartItems, checkoutItem.id));
  };

  const addItemHandler = () => {
    dispatch(addItemToCart(cartItems, checkoutItem));
  };

  return (
    <CheckoutItemContainer>
      <CheckoutItemImageContainer>
        <CheckoutItemImage src={imageUrl} alt={name} />
      </CheckoutItemImageContainer>
      <CheckoutItemName>{name}</CheckoutItemName>
      <CheckoutItemQuantity>
        <div onClick={removeOneItemHandler} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={addItemHandler} className="arrow">
          &#10095;
        </div>
      </CheckoutItemQuantity>
      <CheckoutItemPrice>{price}</CheckoutItemPrice>
      <Button onClick={removeItemHandler}>&#10005;</Button>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
