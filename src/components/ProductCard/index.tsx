import { useAppDispatch } from '../../store/store';
import { addItemToCart } from '../../store/cart/cartReducer';

import { 
  Card,
  Overlay,
  Image,
  TextContainer,
  StyledButton
} from './index.styles.jsx';
import { Product } from '../../store/cart/cartTypes';

type ProductCardProps = {
  product: Product
}
const ProductCard = (props: ProductCardProps) => {
  const { name, imageUrl, price } = props.product;
  const dispatch = useAppDispatch();

  const addToCart = () => {
    dispatch(addItemToCart(props.product));
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