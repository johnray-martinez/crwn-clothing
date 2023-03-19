import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchCategoriesAsync } from '../../store/categories/categoryReducer';
import { Container } from './index.styles';
import { useAppDispatch } from '../../store/store';
import Spinner from '../../components/Spinner';

const CategoryPreview = lazy(() => import('../../components/CategoryPreview'));
const CategoryCatalogue = lazy(() => import('../../components/CategoryCatalogue'));



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
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route index element={<CategoryPreview />} />
          <Route path=':categorySlug' element={<CategoryCatalogue />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default Shop;