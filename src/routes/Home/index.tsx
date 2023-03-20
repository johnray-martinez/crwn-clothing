import React from 'react';
import Helmet from 'react-helmet';
import CategoryList from '../../components/CategoryList';
import { HomeContainer } from './index.styles';

const Home = () => {
  return(
    <HomeContainer>
      <Helmet>
        <title>Crown Clothing | Home</title>
      </Helmet>
      <CategoryList />
    </HomeContainer>
  )
}

export default Home;
