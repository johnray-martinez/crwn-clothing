import CustomButton from '../CustomButton';
import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 90%;
  background-color: rgba(255,255,255,0.2);
  opacity: 0;
  transition: 0.3s;
`;

export const Card = styled.div`
  position: relative;
  cursor: pointer;

  &:hover ${Overlay} {
    opacity: 1;
  }
`;

export const Image = styled.img`
  height: 90%;
  width: 100%;
  background-size: cover;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
`;

export const StyledButton = styled(CustomButton)`
  position: absolute !important;
  width: auto;
  bottom: 24px;
  left: 24px;
  right: 24px;
  opacity: .8;
`;
