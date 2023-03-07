import { useContext } from 'react';
import { CartContext } from '../../context/cart';
import {
  IconContainer,
  Icon,
  Count
} from './index.styles.jsx';

const ShoppingCartIcon = ({itemCount}) => {
  const { setShowDropdown, showDropdown } = useContext(CartContext);
  
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  }

  return (
    <IconContainer onClick={toggleDropdown}>
      <Icon />
      <Count>{itemCount}</Count>
    </IconContainer>
  )
}

export default ShoppingCartIcon;