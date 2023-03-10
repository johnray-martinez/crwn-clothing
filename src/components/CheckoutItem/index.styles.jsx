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