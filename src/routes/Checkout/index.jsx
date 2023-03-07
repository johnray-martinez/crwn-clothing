import { useContext } from 'react';
import { CartContext } from '../../context/cart';
import {
  CheckoutTable,
  CheckoutTableRowHeader,
  CheckoutTableRow,
  CheckoutTableRowLastItem,
  CheckoutTableTotal,
  CheckoutTableControl,
  CheckoutTableImage
} from './index.styles.jsx';

const Checkout = () => {
  const { cart, addItemToCart, removeItemToCart } = useContext(CartContext);

  const products = [...cart.values()];
  let totalPrice = 0;

  return(
    <main>
      <CheckoutTable>
        <CheckoutTableRowHeader>
          <p>Product</p>
          <p>Description</p>
          <p>Quantity</p>
          <p>Price</p>
          <p>Remove</p>
        </CheckoutTableRowHeader>
        {products.map((product) => {
          const {id, name, imageUrl, quantity, price} = product;
          totalPrice += (price * quantity);

          return <CheckoutTableRow key={id}>
            <div>
              <CheckoutTableImage src={imageUrl} alt={name} />
            </div>
            <p>{name}</p>
            <p> 
              <CheckoutTableControl onClick={() => removeItemToCart(id)}> {'< '} </CheckoutTableControl> 
              {quantity} 
              <CheckoutTableControl onClick={() => addItemToCart(product)}>  {' >'} </CheckoutTableControl>
            </p>
            <p>${price * quantity}</p>
            <CheckoutTableControl as='p' onClick={() => removeItemToCart(id, true)}>X</CheckoutTableControl>
          </CheckoutTableRow>
        })}
        <CheckoutTableRowLastItem>
          <CheckoutTableTotal>Total: ${totalPrice}</CheckoutTableTotal>
        </CheckoutTableRowLastItem>
      </CheckoutTable>
    </main>
  );
}

export default Checkout;