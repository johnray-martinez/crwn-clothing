import { useSelector } from 'react-redux';

import { selectCategoriesArray } from '../../store/categories/categorySelectors';
import { selectIsLoading } from '../../store/categories/categorySelectors';
import Spinner from '../Spinner';
import CategoryRow from '../CategoryRow';

const CategoryPreview = () => {
  const categories = useSelector(selectCategoriesArray);
  const isLoading = useSelector(selectIsLoading);

  return(isLoading 
    ? <Spinner />
    :<div>
      {Object.keys(categories).map((title) => {
        const products = categories[title].slice(0, 4);
        return <CategoryRow key={title} title={title} products={products} />
      })}
    </div>
  );
}

export default CategoryPreview;