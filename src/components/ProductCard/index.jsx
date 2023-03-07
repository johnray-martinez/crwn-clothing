import { useContext } from 'react';
import CustomButton from '../CustomButton';
import { CartContext } from '../../context/cart';
import './index.styles.scss';

const ProductCard = (props) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, imageUrl, price} = props;

  const addToCart = () => {
    addItemToCart(props);
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