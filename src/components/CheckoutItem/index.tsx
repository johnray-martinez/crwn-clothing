import { useAppDispatch } from '../../store/store';
import { Fragment } from 'react';

import { Product } from '../../store/cart/cartTypes';
import { removeItemFromCart, addItemToCart } from '../../store/cart/cartReducer';
import {
  Control,
  Image,
} from './index.styles';


type CheckoutItemProps = {
  product: Product, 
}
const CheckoutItem = ({ product }: CheckoutItemProps) => {
  const { id, name, imageUrl, quantity, price } = product;
  const dispatch = useAppDispatch();

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
    <Fragment key={id}>
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
    </Fragment>
  )
}

export default CheckoutItem;