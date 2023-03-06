import {Fragment} from 'react';
import {ReactComponent as CrownLogo} from '../../assets/logos/crown.svg';
import {Outlet, Link} from 'react-router-dom';
import './index.styles.scss';

const Navigation = () => (
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
        <Link className='navigation__link' to='/sign-in'>
          SIGN IN
        </Link>
      </div>    
    </div>
    <Outlet />
  </Fragment>
);

export default Navigation;