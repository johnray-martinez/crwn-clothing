import { Fragment, useContext } from 'react';
import { ReactComponent as CrownLogo } from '../../assets/logos/crown.svg';
import { Outlet, Link } from 'react-router-dom';
import { UserContext } from '../../context/user';
import { signOutUser } from '../../utils/firebase/firebase';
import ShoppingCartIcon from '../../components/ShoppingCartIcon';
import ShoppingCartDropdown from '../../components/ShoppingCartDropdown';
import './index.styles.scss';
import { CartContext } from '../../context/cart';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { cart, totalItemsInCart, showDropdown } = useContext(CartContext);
  
  const signOutHandler = async () => {
    await signOutUser();
  }

  return (
    <Fragment>
      <div className='navigation'>
        <div className='navigation__logo-container'>
          <Link to='/'>
            <CrownLogo />
          </Link>
        </div>
        <div className='navigation__links-container'>
          <Link className='navigation__link' to='/shop'>
            SHOP
          </Link>
          <Link className='navigation__link' to='/contact'>
            CONTACT
          </Link>
          { !currentUser ? 
            <Link className='navigation__link' to='/sign-in'>
            SIGN IN
            </Link>
          : <span className='navigation__link' onClick={signOutHandler}>SIGN OUT</span>
          }
          <ShoppingCartIcon itemCount={totalItemsInCart}/>
        </div>   
        { showDropdown && <ShoppingCartDropdown productList={[...cart.values()]} /> }
      </div>
    <Outlet />
  </Fragment>
)};

export default Navigation;