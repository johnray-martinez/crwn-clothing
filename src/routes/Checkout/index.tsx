import React from 'react';
import { useSelector } from 'react-redux';

import { selectCart } from '../../store/cart/cartSelectors';
import PaymentForm from '../../components/PaymentForm';
import CheckoutItem from '../../components/CheckoutItem';
import {
  Table,
  RowHeader,
  LastRow,
  Total,
  Row
} from './index.styles.jsx';

const Checkout = () => {
  const cart = useSelector(selectCart);
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
          const { price, quantity } = product;

          totalPrice += (price * quantity);
          return (
            <Row key={product.id}>
              <CheckoutItem cart={cart} product={product}/>
            </Row>
          )   
        })}
        <LastRow>
          <Total>Total: ${totalPrice}</Total>
        </LastRow>
        <PaymentForm />
      </Table>
    </main>
  );
}

export default Checkout;