import React from 'react';

import {
  SignUp,
  Login,
  Container
} from './index.styles';

const Authentication = () => {
  return (
    <Container>
      <Login />
      <SignUp />
    </Container>
  );
}

export default Authentication;