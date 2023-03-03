import Category from '../Category';
import './index.styles.scss';

const CategoryList = ({categories}) => {
  return (
    <div className='category-list'>
      {categories.map(({title, id, imageUrl}) => {
        return <Category title={title} key={id} imageUrl={imageUrl}/>
      })}
    </div>
  );
}

export default CategoryList;