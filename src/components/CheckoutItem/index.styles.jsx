import styled from 'styled-components';

export const Control = styled.span`
  cursor: pointer;
  font-weight: 700;
  transition: 0.3s;

  &:hover {
    color: red;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
