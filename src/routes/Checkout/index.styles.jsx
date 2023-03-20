import styled from 'styled-components';
import { minWidth } from '../../styles/Generic.styles';

export const Row = styled.div`
  display: flex;
  grid-gap: 12px;
  border-bottom: 2px solid black;
  padding: 24px 0;
  align-items: center;

  > * {
    flex-basis: 20%;
  }

  > *:not(:nth-of-type(1)),
  > *:not(:nth-of-type(2)){
    display: flex;
    justify-content: center;
  }
`;

export const Table = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export const RowHeader = styled(Row)`
  font-size: 18px;
  font-weight: 700;
  display: none;

  ${minWidth.md} {
    display: flex;
  }
`;

export const LastRow = styled(Row)`
  border: none;
  justify-content: flex-end;
`;

export const Total = styled.p`
  font-size: 32px;
  font-weight: 700;
  white-space: nowrap;
`;
