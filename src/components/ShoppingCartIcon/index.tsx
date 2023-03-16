import { useSelector, useDispatch } from 'react-redux';
import { selectShowDropdown } from '../../store/cart/cartSelectors';
import { setShowDropdown } from '../../store/cart/cartReducer';
import {
  IconContainer,
  Icon,
  Count
} from './index.styles.jsx';

type ShoppingCartIconProps = {
  itemCount: number
}

const ShoppingCartIcon = ({ itemCount }: ShoppingCartIconProps) => {
  const showDropdown = useSelector(selectShowDropdown);
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    dispatch(setShowDropdown(!showDropdown));
  }

  return (
    <IconContainer onClick={toggleDropdown}>
      <Icon />
      <Count>{itemCount}</Count>
    </IconContainer>
  )
}

export default ShoppingCartIcon;