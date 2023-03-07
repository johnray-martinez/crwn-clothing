import styled from 'styled-components';

import SignUpForm from '../../components/SignUpForm';
import LoginForm from '../../components/LoginForm';

export const SignUp = styled(SignUpForm)`
  width: 100%;
`;

export const Login = styled(LoginForm)`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  max-width: 850px;
  margin: 0 auto;
  grid-gap: 42px;
  
  ${SignUp},
  ${Login} {
    flex-basis: 50%;
  }
`;

