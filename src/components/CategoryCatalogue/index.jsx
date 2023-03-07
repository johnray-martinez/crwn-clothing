import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { CategoryContext } from '../../context/category';
import CategoryRow from '../CategoryRow';

const CategoryCatalogue = () => {
  const { categorySlug } = useParams();
  const { categories } = useContext(CategoryContext);
  const productsList = categories[categorySlug];

  console.log(categories);
  return(
    <div className='category-catalogue'>
      {productsList && <CategoryRow title={categorySlug} products={productsList} />}
    </div>
  );
}

export default CategoryCatalogue;