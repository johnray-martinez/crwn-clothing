import styled from 'styled-components';
import { minWidth } from '../../styles/Generic.styles';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  grid-gap: 12px;

  ${minWidth.md} {
    flex-wrap: nowrap;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 12px;

  ${minWidth.md} {
    flex-direction: row;
  }
`