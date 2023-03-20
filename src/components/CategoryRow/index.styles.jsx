import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { minWidth } from '../../styles/Generic.styles';

export const Title = styled(Link)`
  font-size: 32px;
  font-weight: 700;
  text-decoration: none;
  color: black;
  transition: 0.3s;
  text-transform: uppercase;
  text-align: center;
  display: block;

  &:hover {
    color: #767676;
  }
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 24px;

  ${minWidth.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${minWidth.lg} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
