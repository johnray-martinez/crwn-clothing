import { useSelector } from 'react-redux'; 
import { useParams } from 'react-router-dom';

import { selectCategoriesArray } from '../../store/categories/categorySelectors';
import CategoryRow from '../CategoryRow';

const CategoryCatalogue = () => {
  const { categorySlug } = useParams();
  const categories = useSelector(selectCategoriesArray);
  const productsList = categories[categorySlug];
  

  return(
    <div>
      {productsList && <CategoryRow 
        title={categorySlug} 
        products={productsList} 
      />}
    </div>
  );
}

export default CategoryCatalogue;