import { ReactComponent as ShoppingCartIconSvg } from '../../assets/logos/shopping-bag.svg';

import './index.styles.scss';

const ShoppingCartIcon = ({itemCount}) => {
  return (
    <div className='shopping-cart-icon'>
      <ShoppingCartIconSvg className='shopping-cart-icon__asset'/>
      <span className='shopping-cart-icon__count'>{itemCount}</span>
    </div>
  )
}

export default ShoppingCartIcon;