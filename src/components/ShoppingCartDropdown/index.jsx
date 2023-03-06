import CustomButton from '../CustomButton';
import './index.styles.scss';

const ShoppingCartDropdown = () => {
  return(
    <div className='shopping-cart-dropdown'>
      <div className='shopping-cart-dropdown__list'>

      </div>
      <CustomButton>Go to Checkout</CustomButton>
    </div>
  )
}

export default ShoppingCartDropdown;