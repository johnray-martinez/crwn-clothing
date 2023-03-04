import CategoryList from '../../components/CategoryList';
import './index.styles.scss';

import {Outlet} from 'react-router-dom';

const Home = () => {
  return(
    <main className='home'>
      <CategoryList />
    </main>
  )
}

export default Home;
