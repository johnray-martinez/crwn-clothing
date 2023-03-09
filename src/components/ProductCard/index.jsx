import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cartActions.js';
import { selectCart } from '../../store/cart/cartSelectors.js'; 
import { 
  Card,
  Overlay,
  Image,
  TextContainer,
  StyledButton
} from './index.styles.jsx';

const ProductCard = (props) => {
  const { name, imageUrl, price} = props.product;
  const dispatch = useDispatch();

  const cart = useSelector(selectCart);

  const addToCart = () => {
    dispatch(addItemToCart(cart, props.product));
  }

  return(
    <Card>
      <Overlay>
        <StyledButton onClick={addToCart} type='button' buttonType='inverted'>ADD TO CART</StyledButton>
      </Overlay>
      <Image src={imageUrl} alt={name} />
      <TextContainer>
        <span>{name}</span>
        <span>{price}</span>
      </TextContainer>
    </Card>
  );
}

export default ProductCard;