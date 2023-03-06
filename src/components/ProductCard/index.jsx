import CustomButton from '../CustomButton';
import './index.styles.scss';

const ProductCard = ({name, imageUrl, price}) => {
  return(
    <div className='product-card'>
      <div className='product-card__overlay'>
        <CustomButton type='button'>ADD TO CART</CustomButton>
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