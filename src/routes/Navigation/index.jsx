import {Outlet} from 'react-router-dom';

const Navigation = () => (
  <div className='navigation'>
    <h1>I AM THE NAVIGATIOn</h1>
    <Outlet />
  </div>
);

export default Navigation;