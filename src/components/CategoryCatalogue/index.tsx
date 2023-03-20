import { Fragment } from 'react';
import { useSelector } from 'react-redux'; 
import { useParams } from 'react-router-dom';

import { selectCategoriesArray, selectIsLoading } from '../../store/categories/categorySelectors';

import CategoryRow from '../CategoryRow';
import Spinner from '../Spinner';

const CategoryCatalogue = () => {
  const { categorySlug } = useParams();
  const categories = useSelector(selectCategoriesArray);
  const isLoading = useSelector(selectIsLoading);
  const productsList = categories[categorySlug as string];
  
  return(
    <div>
      {isLoading 
      ? <Spinner />
      : productsList && (
        <Fragment>
          <CategoryRow 
            title={categorySlug as string} 
            products={productsList} 
          />
        </Fragment>
      )}
    </div>
  );
}

export default CategoryCatalogue;