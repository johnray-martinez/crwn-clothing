import { useSelector } from 'react-redux';

import { selectCategories } from '../../store/categories/categorySelectors';
import CategoryRow from '../CategoryRow';

const CategoryPreview = () => {
const categories = useSelector(selectCategories);
  
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