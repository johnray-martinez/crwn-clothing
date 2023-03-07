import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
`;
