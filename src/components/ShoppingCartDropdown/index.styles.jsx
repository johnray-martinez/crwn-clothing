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

export const ListItem = styled.div`
  display: flex;
  margin-bottom: 12px;
  cursor: pointer;
`;

export const ThumbnailContainer = styled.div`
  height: 100px;
  width: 75px;
  margin-right: 12px;
`;

export const Thumbnail = styled.img`
  height: 100%;
  width: 100%;
  background-size: cover;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 18px;
`;

export const CheckoutButton = styled(CustomButton)`
  width: 100%;
`;

export const EmptyMessage = styled.p`
  font-weight: 700;
  font-size: 24px;
`;