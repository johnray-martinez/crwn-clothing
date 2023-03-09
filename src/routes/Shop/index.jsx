import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CategoryPreview from '../../components/CategoryPreview';
import CategoryCatalogue from '../../components/CategoryCatalogue';
import { fetchCategoriesStart } from '../../store/categories/categoryAction';
import {  Container } from './index.styles';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
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