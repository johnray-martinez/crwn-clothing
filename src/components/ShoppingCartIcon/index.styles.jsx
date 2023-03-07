import styled from 'styled-components';
import { ReactComponent as ShoppingCartIconSvg } from '../../assets/logos/shopping-bag.svg';


export const IconContainer = styled.div`
  position: relative;
  cursor: pointer;  
`;

export const Icon = styled(ShoppingCartIconSvg)`
  height: 24px;
  width: 24px;
`;

export const Count = styled.span`
  font-size: 12px;
  font-weight: 700;
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
`;