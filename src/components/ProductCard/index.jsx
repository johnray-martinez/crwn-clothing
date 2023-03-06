import { useContext } from 'react';
import CustomButton from '../CustomButton';
import { CartContext } from '../../context/cart';
import './index.styles.scss';

const ProductCard = ({id, name, imageUrl, price}) => {
  const { cart, setCart } = useContext(CartContext);
  const addToCart = () => {
    setCart([...cart, {
      id, name, imageUrl, price
    }]);
  }

  return(
    <div className='product-card'>
      <div className='product-card__overlay'>
        <CustomButton onClick={addToCart} type='button'>ADD TO CART</CustomButton>
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