import { useDispatch } from 'react-redux';
import { removeItemFromCart, addItemToCart } from '../../store/cart/cartReducer';
import {
  Row,
  Control,
  Image,
} from './index.styles';

const CheckoutItem = ({product, cart}) => {
  const { id, name, imageUrl, quantity, price } = product;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItemToCart(product));
  }

  const removeFromCart = () => {
    dispatch(removeItemFromCart({ id }));
  }

  const clearFromCart = () => {
    dispatch(removeItemFromCart({ id, removeAll: true }));
  }

  return (
    <Row key={id}>
      <div>
        <Image src={imageUrl} alt={name} />
      </div>
      <p>{name}</p>
      <p> 
        <Control onClick={removeFromCart}> {'< '} </Control> 
        {quantity} 
        <Control onClick={addToCart}>  {' >'} </Control>
      </p>
      <p>${price * quantity}</p>
      <Control as='p' onClick={clearFromCart}>X</Control>
    </Row>
  )
}

export default CheckoutItem;