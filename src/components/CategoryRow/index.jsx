import ProductCard from '../ProductCard';
import './index.styles.scss';

const CategoryRow = ({title, products}) => {
  return (
    <div key={title}>
      <h2 className='category-row__category-title'>{title}</h2>
      <div className='category-row__product-list'>
        {products.map(({id, name, imageUrl, price}) => {
            return <ProductCard key={id} id={id} name={name} imageUrl={imageUrl} price={price} />})}
      </div>
    </div>
  )
}

export default CategoryRow;