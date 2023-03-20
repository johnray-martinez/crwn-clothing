import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCart } from '../../store/cart/cartSelectors';
import ShoppingCartDropdownItem from '../ShoppingCartDropdownItem';
import {
  Container,
  List,
  CheckoutButton,
  EmptyMessage
} from './index.styles.jsx';

const ShoppingCartDropdown = () => {
  const cart = useSelector(selectCart);

  return(
    <Container>
      <List>
        {cart.length ? 
          cart.map((product) => <ShoppingCartDropdownItem key={product.id} {...product} />)
        : <EmptyMessage>Your cart is empty</EmptyMessage>}
      </List>
      <Link to='/checkout'>
        <CheckoutButton>Go to Checkout</CheckoutButton>
      </Link>
    </Container>
  )
}

export default ShoppingCartDropdown;