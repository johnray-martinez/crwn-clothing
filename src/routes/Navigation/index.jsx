import { Fragment, useContext } from 'react';
import { ReactComponent as CrownLogo } from '../../assets/logos/crown.svg';
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { signOutUser } from '../../utils/firebase/firebase';
import ShoppingCartIcon from '../../components/ShoppingCartIcon';
import ShoppingCartDropdown from '../../components/ShoppingCartDropdown';
import { CartContext } from '../../context/cart';

import { selectCurrentUser } from '../../store/user/userSelectors';

import { 
  NavigationContainer,
  NavigationLinksContainer,
  NavigationLink
 } from './index.styles';

const Navigation = () => {
  const { cart, totalItemsInCart, showDropdown } = useContext(CartContext);
  
  const currentUser = useSelector(selectCurrentUser);

  const signOutHandler = async () => {
    await signOutUser();
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
        { showDropdown && <ShoppingCartDropdown productList={[...cart.values()]} /> }
      </NavigationContainer>
    <Outlet />
  </Fragment>
)};

export default Navigation;