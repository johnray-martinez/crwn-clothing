import styled from 'styled-components';
import CustomButton from '../CustomButton';

export const FormContainer = styled.form`
  height: 100px;
`;

export const Container = styled.div`
  display: flex;
  height: 300px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PaymentButton = styled(CustomButton)`
  margin-top: 16px;
  margin-left: auto;
  display: block;
`