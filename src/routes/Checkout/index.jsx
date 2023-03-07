import { useContext } from 'react';
import { CartContext } from '../../context/cart';
import './index.styles.scss';

const Checkout = () => {
  const { cart, addItemToCart, removeItemToCart } = useContext(CartContext);

  const products = [...cart.values()];
  
  return(
    <main className='checkout'>
      <div className='checkout__table'>
        <div className='checkout__table-row checkout__table-row--header'>
          <p>Product</p>
          <p>Description</p>
          <p>Quantity</p>
          <p>Price</p>
          <p>Remove</p>
        </div>
        {products.map((product) => {
          const {id, name, imageUrl, quantity, price} = product;

          return <div key={id} className='checkout__table-row'>
            <div className='checkout__table-image-container'>
              <img className='checkout__table-image' src={imageUrl} alt={name} />
            </div>
            <p>{name}</p>
            <p> 
              <span className='checkout__table-control' onClick={() => removeItemToCart(id)}> {'< '} </span> 
              {quantity} 
              <span className='checkout__table-control' onClick={() => addItemToCart(product)}>  {' >'} </span>
            </p>
            <p>{price}</p>
            <p className='checkout__table-control' onClick={() => removeItemToCart(id, true)}>X</p>
          </div>
        })}
      </div>
    </main>
  );
}

export default Checkout;