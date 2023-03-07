import { useContext } from 'react';
import { CartContext } from '../../context/cart';
import {
  Table,
  Row,
  RowHeader,
  LastRow,
  Total,
  Control,
  Image
} from './index.styles.jsx';

const Checkout = () => {
  const { cart, addItemToCart, removeItemToCart } = useContext(CartContext);

  const products = [...cart.values()];
  let totalPrice = 0;

  return(
    <main>
      <Table>
        <RowHeader>
          <p>Product</p>
          <p>Description</p>
          <p>Quantity</p>
          <p>Price</p>
          <p>Remove</p>
        </RowHeader>
        {products.map((product) => {
          const {id, name, imageUrl, quantity, price} = product;
          totalPrice += (price * quantity);

          return <Row key={id}>
            <div>
              <Image src={imageUrl} alt={name} />
            </div>
            <p>{name}</p>
            <p> 
              <Control onClick={() => removeItemToCart(id)}> {'< '} </Control> 
              {quantity} 
              <Control onClick={() => addItemToCart(product)}>  {' >'} </Control>
            </p>
            <p>${price * quantity}</p>
            <Control as='p' onClick={() => removeItemToCart(id, true)}>X</Control>
          </Row>
        })}
        <LastRow>
          <Total>Total: ${totalPrice}</Total>
        </LastRow>
      </Table>
    </main>
  );
}

export default Checkout;