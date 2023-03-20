import styled from 'styled-components';
import { minWidth } from './styles/Generic.styles';

export const Container = styled.div`
  max-width: 1375px;
  margin: 0 auto;
  padding: 18px;

  ${minWidth.md} {
    padding: 42px;
  }
`