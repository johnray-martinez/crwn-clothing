import styled from 'styled-components';

export const Container = styled.div`
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
