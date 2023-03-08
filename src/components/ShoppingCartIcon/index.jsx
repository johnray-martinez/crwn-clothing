import { useSelector, useDispatch } from 'react-redux';
import { selectShowDropdown } from '../../store/cart/cartSelectors';
import { setShowDropdown } from '../../store/cart/cartActions';
import {
  IconContainer,
  Icon,
  Count
} from './index.styles.jsx';

const ShoppingCartIcon = ({itemCount}) => {
  const showDropdown = useSelector(selectShowDropdown);
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    console.log(showDropdown);
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