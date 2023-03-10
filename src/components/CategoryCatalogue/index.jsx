import { useSelector } from 'react-redux'; 
import { useParams } from 'react-router-dom';

import { selectCategoriesArray, selectIsLoading } from '../../store/categories/categorySelectors';
import CategoryRow from '../CategoryRow';
import Spinner from '../Spinner';

const CategoryCatalogue = () => {
  const { categorySlug } = useParams();
  const categories = useSelector(selectCategoriesArray);
  const isLoading = useSelector(selectIsLoading);
  const productsList = categories[categorySlug];
  
  return(
    <div>
      {isLoading 
      ? <Spinner />
      : productsList && <CategoryRow 
        title={categorySlug} 
        products={productsList} 
      />}
    </div>
  );
}

export default CategoryCatalogue;