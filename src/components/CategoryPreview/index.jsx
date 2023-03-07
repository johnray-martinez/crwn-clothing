import { useContext } from 'react';

import { CategoryContext } from '../../context/category';
import CategoryRow from '../CategoryRow';

const CategoryPreview = () => {
const { categories } = useContext(CategoryContext);
  
  return(
    <div className='category-preview'>
      {Object.keys(categories).map((title) => {
        const products = categories[title].slice(0, 4);
        return <CategoryRow key={title} title={title} products={products} />
      })}
    </div>
  );
}

export default CategoryPreview;