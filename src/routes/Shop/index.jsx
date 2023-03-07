import { Routes, Route } from 'react-router-dom';
import CategoryPreview from '../../components/CategoryPreview';
import CategoryCatalogue from '../../components/CategoryCatalogue';

const Shop = () => {
  return (
    <main className='shop'>
      <Routes>
        <Route index element={<CategoryPreview />} />
        <Route path=':categorySlug' element={<CategoryCatalogue />} />
      </Routes>
    </main>
  );
}

export default Shop;