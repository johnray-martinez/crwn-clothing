import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import CategoryPreview from '../../components/CategoryPreview';
import CategoryCatalogue from '../../components/CategoryCatalogue';
import { fetchCategoriesAsync } from '../../store/categories/categoryReducer';
import { Container } from './index.styles';
import { useAppDispatch } from '../../store/store';

const Shop = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => { 
      dispatch(fetchCategoriesAsync());    
    }

    getCategoriesMap();
  }, [dispatch])

  return (
    <Container>
      <Routes>
        <Route index element={<CategoryPreview />} />
        <Route path=':categorySlug' element={<CategoryCatalogue />} />
      </Routes>
    </Container>
  );
}

export default Shop;