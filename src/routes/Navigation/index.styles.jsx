import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 64px;
  align-items: center; 
  position: relative;
`;

export const NavigationLinksContainer = styled.div`
  display: flex;
  grid-gap: 24px;
`;

export const NavigationLink = styled(Link)`
  color: #626767;
  text-decoration: none; 
  font-weight: 600;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: lighten(#626767, 30%)
  }
`;