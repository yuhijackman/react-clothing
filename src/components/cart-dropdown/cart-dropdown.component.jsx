import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems
} from "./cart-dropdown.styles.jsx";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../store/cart/cart.selector";
import Button from "../button/button.component.jsx";
import { useSelector } from "react-redux";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length === 0 ? (
          <EmptyMessage>Empty</EmptyMessage>
        ) : (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        )}
      </CartItems>
      <Button onClick={goToCheckout}>Go to checkout</Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
