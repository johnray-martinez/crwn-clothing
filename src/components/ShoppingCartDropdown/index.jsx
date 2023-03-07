import { Link } from 'react-router-dom';
import CustomButton from '../CustomButton';
import './index.styles.scss';

const ShoppingCartDropdown = ({productList}) => {
  return(
    <div className='shopping-cart-dropdown'>
      <div className='shopping-cart-dropdown__list'>
        {productList.map(({name, id, quantity, imageUrl, price}) => {
          return <div key={id} className='shopping-cart-dropdown__list-item'>
            <div className='shopping-cart-dropdown__list-item-thumbnail-container'>
              <img className='shopping-cart-dropdown__list-item-thumbnail' src={imageUrl} alt={name} />
            </div>
            <div className='shopping-cart-dropdown__list-item-text-container'>
              <p className='shopping-cart-dropdown__list-item-text'>{name}</p>
              <p className='shopping-cart-dropdown__list-item-text'>{quantity} X ${price}</p>
            </div>
          </div>
        })}
      </div>
      <Link to='/checkout'>
        <CustomButton>Go to Checkout</CustomButton>
      </Link>
    </div>
  )
}

export default ShoppingCartDropdown;