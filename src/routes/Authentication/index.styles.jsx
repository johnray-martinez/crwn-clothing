import styled from 'styled-components';

import SignUpForm from '../../components/SignUpForm';
import LoginForm from '../../components/LoginForm';

export const SignUp = styled(SignUpForm)`

`;

export const Login = styled(LoginForm)`

`;

export const Container = styled.div`
  display: flex;
  max-width: 850px;
  margin: 0 auto;
  grid-gap: 42px;
  
  ${SignUpForm},
  ${LoginForm} {
    flex-basis: 50%;
  }
`;

