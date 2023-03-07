import { Routes, Route } from 'react-router-dom';
import CategoryPreview from '../../components/CategoryPreview';
import CategoryCatalogue from '../../components/CategoryCatalogue';
import {
  Container 
} from './index.styles';

const Shop = () => {
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