import { useContext } from 'react';

import { ProductContext } from '../../context/product';
import ProductCard from '../../components/ProductCard';
import './index.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className='shop'>
      {products.map(({name, id, imageUrl, price}) => {
        return <ProductCard key={id} name={name} imageUrl={imageUrl} price={price} />
      })}
    </div>
  );
}

export default Shop;