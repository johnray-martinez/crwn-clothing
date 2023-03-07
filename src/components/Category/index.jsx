import { Link } from 'react-router-dom';
import './index.styles.scss';

const Category = ({title, imageUrl,}) => {
  return (
    <div className='category'>
      <Link to={`/shop/${title}`}>
        <img className='category__bg' src={imageUrl} alt={title}/>
        <div className='category__content-container'>
          <h2 className='category__title'>{title}</h2>
          <p className='category__subtitle'>Shop Now</p>
        </div>
      </Link>
    </div>
  );
}

export default Category;