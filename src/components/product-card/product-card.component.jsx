import {
  ProductCardContainer,
  ProductCardImage,
  ProductCardFooter
} from "./product-card.styles";
import { useDispatch, useSelector } from "react-redux";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addCartHandler = () => {
    dispatch(addItemToCart(cartItems, product));
  };

  return (
    <ProductCardContainer>
      <ProductCardImage src={imageUrl} alt={name} />
      <ProductCardFooter>
        <span>{name}</span>
        <span>{price}</span>
      </ProductCardFooter>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addCartHandler}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
