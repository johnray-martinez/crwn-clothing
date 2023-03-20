import { useAppDispatch } from '../../store/store';
import { Fragment, memo, useCallback, useMemo } from 'react';

import { removeItemFromCart, addItemToCart } from '../../store/cart/cartReducer';
import {
  Control,
  Image,
} from './index.styles';


type CheckoutItemProps = {
  id: number, 
  name: string, 
  imageUrl: string, 
  quantity: number, 
  price: number
}

const CheckoutItem = memo(({ 
  id, 
  name, 
  imageUrl, 
  quantity, 
  price 
}: CheckoutItemProps) => {  
  
  const product = useMemo(() => {
    return {
      id, 
      name, 
      imageUrl, 
      quantity, 
      price 
    }
  }, [id, name, imageUrl, quantity, price]);

  const dispatch = useAppDispatch();

  const addToCart = useCallback(() => {
    dispatch(addItemToCart(product));
  }, [dispatch, product])

  const removeFromCart = useCallback(() => {
    dispatch(removeItemFromCart({ id }));
  }, [dispatch, id])

  const clearFromCart = useCallback(() => {
    dispatch(removeItemFromCart({ id, removeAll: true }));
  }, [dispatch, id])

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
})

export default CheckoutItem;