import { Fragment, useContext } from 'react';
import { ReactComponent as CrownLogo } from '../../assets/logos/crown.svg';
import { Outlet, Link } from 'react-router-dom';
import { UserContext } from '../../context/user';
import { signOutUser } from '../../utils/firebase/firebase';
import './index.styles.scss';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
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
       
      </div>    
    </div>
    <Outlet />
  </Fragment>
)};

export default Navigation;