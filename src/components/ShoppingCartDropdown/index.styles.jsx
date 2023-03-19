import styled from 'styled-components';
import CustomButton from '../CustomButton';

export const Container = styled.div`
  height: 375px;
  width: 300px;
  border: 2px solid black;
  padding: 12px;
  position: absolute;
  right: 0;
  top: 90%;
  background-color: white;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const List = styled.div`
  max-height: 305px;
  overflow-y: auto;
  height: 100%;
`;


export const CheckoutButton = styled(CustomButton)`
  width: 100%;
`;

export const EmptyMessage = styled.p`
  font-weight: 700;
  font-size: 24px;
`;