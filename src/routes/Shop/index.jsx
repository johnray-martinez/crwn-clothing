import { Routes, Route } from 'react-router-dom';
import CategoryPreview from '../../components/CategoryPreview';

const Shop = () => {
  

  return (
    <main className='shop'>
      <Routes>
        <Route index element={<CategoryPreview />}></Route>
      </Routes>
    </main>
  );
}

export default Shop;