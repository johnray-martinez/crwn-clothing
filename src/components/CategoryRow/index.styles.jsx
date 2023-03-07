import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled(Link)`
  font-size: 32px;
  font-weight: 700;
  text-decoration: none;
  color: #767676;
  transition: 0.3s;

  &:hover {
    color: black;
  }
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8px;
`;
