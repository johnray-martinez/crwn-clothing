import { Product } from '../../store/cart/cartTypes';
import ProductCard from '../ProductCard';
import {
  Title,
  ProductList
} from './index.styles.jsx';

type CategoryRowProps = {
  title: string, 
  products: Product[]
}
const CategoryRow = ({title, products}: CategoryRowProps) => {
  return (
    <div key={title}>
      <h2>
        <Title to={`/shop/${title}`}>{title}</Title>
      </h2>
      <ProductList>
        {products.map((product) => {
            return <ProductCard key={product.id} product={product} />})}
      </ProductList>
    </div>
  )
}

export default CategoryRow;