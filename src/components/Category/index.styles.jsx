import styled from 'styled-components';
import { minWidth } from '../../styles/Generic.styles';

export const Background = styled.img`
  width: 100%;
  height: 100%;
  background-size: contain;
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.75);
  border: 2px solid black;
  transition: 0.3s;
  text-align: center;
  padding: 8px 24px;
  width: 150px;

  ${minWidth.lg} {
    padding: 16px 64px;
    width: 250px;
  }
`;

export const Text = styled.p`
  color: black;
  font-size: 14px;

  ${minWidth.lg} {
    font-size: 16px;
  }
`;

export const Title = styled(Text)`
  text-transform: uppercase;
  font-size: 16px;

  ${minWidth.lg} {
    font-size: 24px;
  }
`;

export const Container = styled.div`
  position: relative;
  cursor: pointer;
  flex-basis: 45%;
  flex-grow: 1;
  overflow: hidden;
  border: 2px solid black;

  ${minWidth.lg} {
    flex-basis: 30%;
  }

  &:hover ${TextContainer} {
    background-color: rgba(255, 255,255, 1);
  }

  &:hover ${Background} {
    transform: scale(2);
    transition: 15s ease-in;
  }
`;