import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal
} from "../../store/cart/cart.selector";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotal);

  return (
    <div>
      <h1>Checkout</h1>
      <div className="checkout-container">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem) => {
          return <CheckoutItem key={cartItem.id} checkoutItem={cartItem} />;
        })}
        <span className="total">Total: ${totalPrice}</span>
      </div>
    </div>
  );
};

export default Checkout;
