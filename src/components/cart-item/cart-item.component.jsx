import {
  CartItemContainer,
  CartIemImg,
  CartItemDetails,
  CartItemName
} from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <CartIemImg src={imageUrl} alt={name} />
      <CartItemDetails>
        <CartItemName>{name}</CartItemName>
        <span>
          {quantity} x ${price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
