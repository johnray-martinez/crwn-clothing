import { useContext } from 'react';

import { CartContext } from '../../context/cart';
import { 
  Card,
  Overlay,
  Image,
  TextContainer,
  StyledButton
} from './index.styles.jsx';

const ProductCard = (props) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, imageUrl, price} = props.product;

  const addToCart = () => {
    addItemToCart(props.product);
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