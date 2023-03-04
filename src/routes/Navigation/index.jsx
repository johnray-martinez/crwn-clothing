import {Fragment} from 'react';
import {ReactComponent as CrownLogo} from '../../assets/logos/crown.svg';
import {Outlet, Link} from 'react-router-dom';

const Navigation = () => (
  <Fragment>
    <div className='navigation'>
      <div className='navigation__logo-container'>
        <Link to='/'>
          <CrownLogo />
        </Link>
      </div>
      <div className='navigation__links-container'>
      </div>    
    </div>
    <Outlet />
  </Fragment>
);

export default Navigation;