import { useContext } from 'react';
import CustomButton from '../CustomButton';
import { CartContext } from '../../context/cart';
import './index.styles.scss';

const ProductCard = ({id, name, imageUrl, price}) => {
  const { cart, setCart, totalItemsInCart, setTotalItemsInCart } = useContext(CartContext);
  const addToCart = () => {
    const newMap = new Map(cart);

    if (newMap.has(id)) {
      const product = newMap.get(id);
      product.quantity++;
    } else {
      newMap.set(id, {
        id, name, imageUrl, price, quantity: 1
      })
    }

    setCart(newMap);
    setTotalItemsInCart(totalItemsInCart + 1);
  }

  return(
    <div className='product-card'>
      <div className='product-card__overlay'>
        <CustomButton onClick={addToCart} type='button' buttonType='inverted'>ADD TO CART</CustomButton>
      </div>
      <img className='product-card__image' src={imageUrl} alt="name" />
      <div className='product-card__text-container'>
        <span>{name}</span>
        <span>{price}</span>
      </div>
    </div>
  );
}

export default ProductCard;