import { Fragment } from 'react';
import { ReactComponent as CrownLogo } from '../../assets/logos/crown.svg';
import { Outlet, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutStart } from '../../store/user/userAction';
import ShoppingCartIcon from '../../components/ShoppingCartIcon';
import ShoppingCartDropdown from '../../components/ShoppingCartDropdown';
import { selectCurrentUser } from '../../store/user/userSelectors';
import { 
  selectShowDropdown,
  selectCart,
  selectTotalItemsInCart
 } from '../../store/cart/cartSelectors';

import { 
  NavigationContainer,
  NavigationLinksContainer,
  NavigationLink
 } from './index.styles';

const Navigation = () => { 
  const currentUser = useSelector(selectCurrentUser);
  const showDropdown = useSelector(selectShowDropdown);
  const cart = useSelector(selectCart);
  const totalItemsInCart = useSelector(selectTotalItemsInCart);
  const dispatch = useDispatch();

  const signOutHandler = async () => {
    dispatch(signOutStart());
  }

  return (
    <Fragment>
      <NavigationContainer>
        <div>
          <Link to='/'>
            <CrownLogo />
          </Link>
        </div>
        <NavigationLinksContainer>
          <NavigationLink to='/shop'>
            SHOP
          </NavigationLink>
          {/* <NavigationLink to='/contact'>
            CONTACT
          </NavigationLink> */}
          { !currentUser ? 
            <NavigationLink to='/sign-in'>
            SIGN IN
            </NavigationLink>
          : <NavigationLink as='span' onClick={signOutHandler}>SIGN OUT</NavigationLink>
          }
          <ShoppingCartIcon itemCount={totalItemsInCart}/>
        </NavigationLinksContainer>   
        { showDropdown && <ShoppingCartDropdown 
        productList={cart} /> }
      </NavigationContainer>
    <Outlet />
  </Fragment>
)};

export default Navigation;