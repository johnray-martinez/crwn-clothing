import React from 'react';
import { Helmet, HelmetProvider} from 'react-helmet-async';
import CategoryList from '../../components/CategoryList';
import { HomeContainer } from './index.styles';

const Home = () => {
  return(
    <HelmetProvider>
      <HomeContainer>
        <Helmet>
          <title>Crown Clothing | Home</title>
        </Helmet>
        <CategoryList />
      </HomeContainer>
    </HelmetProvider>
  )
}

export default Home;
