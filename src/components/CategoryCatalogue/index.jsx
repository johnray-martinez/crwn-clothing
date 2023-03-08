import { useSelector } from 'react-redux'; 
import { useParams } from 'react-router-dom';

import { selectCategories } from '../../store/categories/categorySelectors';
import CategoryRow from '../CategoryRow';

const CategoryCatalogue = () => {
  const { categorySlug } = useParams();
  const categories = useSelector(selectCategories);
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