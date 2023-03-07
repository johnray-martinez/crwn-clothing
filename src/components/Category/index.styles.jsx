import styled from 'styled-components';

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
  padding: 16px 48px;
  border: 2px solid black;
  transition: 0.3s;
`;

export const Text = styled.p`
  color: black;
`;

export const Title = styled(Text)`
  text-transform: lowercase;
`;

export const Container = styled.div`
  position: relative;
  cursor: pointer;
  flex-basis: 30%;
  flex-grow: 1;
  overflow: hidden;
  border: 2px solid black;

  &:hover ${TextContainer} {
    background-color: rgba(255, 255,255, 1);
  }

  &:hover ${Background} {
    transform: scale(2);
    transition: 15s ease-in;
  }
`;