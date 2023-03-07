import styled from 'styled-components';

export const CheckoutTable = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export const CheckoutTableRow = styled.div`
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

export const CheckoutTableRowHeader = styled(CheckoutTableRow)`
  font-size: 18px;
  font-weight: 700;
`;

export const CheckoutTableRowNoBorder = styled(CheckoutTableRow)`
  border: none;
`;

export const CheckoutTableRowLastItem = styled(CheckoutTableRowNoBorder)`
  justify-content: flex-end;
`;

export const CheckoutTableTotal = styled.p`
  font-size: 32px;
  font-weight: 700;
`;

export const CheckoutTableControl = styled.span`
  cursor: pointer;
  font-weight: 700;
  transition: 0.3s;

  &:hover {
    color: red;
  }
`;

export const CheckoutTableImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
