import React from 'react';
import { Fragment } from 'react';
import { ReactComponent as CrownLogo } from '../../assets/logos/crown.svg';
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { signOutUserAsync } from '../../store/user/userThunks';
import ShoppingCartIcon from '../../components/ShoppingCartIcon';
import ShoppingCartDropdown from '../../components/ShoppingCartDropdown';
import { selectCurrentUser } from '../../store/user/userSelectors';
import { useAppDispatch } from '../../store/store';
import { 
  selectShowDropdown,
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
  const totalItemsInCart = useSelector(selectTotalItemsInCart);
  const dispatch = useAppDispatch();

  const signOutHandler = async () => {
    dispatch(signOutUserAsync());
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
        { showDropdown && <ShoppingCartDropdown /> }
      </NavigationContainer>
    <Outlet />
  </Fragment>
)};

export default Navigation;