import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CategoryPreview from '../../components/CategoryPreview';
import CategoryCatalogue from '../../components/CategoryCatalogue';
import { getCategoriesAndDocuments} from '../../utils/firebase/firebase'
import { setCategories } from '../../store/categories/categoryReducer';
import {  Container } from './index.styles';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      
      dispatch(setCategories(categoriesMap));    
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