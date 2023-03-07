import { useContext } from 'react';
import { ReactComponent as ShoppingCartIconSvg } from '../../assets/logos/shopping-bag.svg';
import { CartContext } from '../../context/cart';
import './index.styles.scss';

const ShoppingCartIcon = ({itemCount}) => {
  const { setShowDropdown, showDropdown } = useContext(CartContext);
  
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  }

  return (
    <div className='shopping-cart-icon' onClick={toggleDropdown}>
      <ShoppingCartIconSvg className='shopping-cart-icon__asset'/>
      <span className='shopping-cart-icon__count'>{itemCount}</span>
    </div>
  )
}

export default ShoppingCartIcon;