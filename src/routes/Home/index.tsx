import React from 'react';
import CategoryList from '../../components/CategoryList';
import { HomeContainer } from './index.styles';

const Home = () => {
  return(
    <HomeContainer>
      <CategoryList />
    </HomeContainer>
  )
}

export default Home;
