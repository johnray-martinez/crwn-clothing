import React from 'react';
import Helmet from 'react-helmet';

import {
  SignUp,
  Login,
  Container
} from './index.styles';

const Authentication = () => {
  return (
    <Container>
      <Helmet>
        <title>Crown Clothing | Sign In</title>
      </Helmet>
      <Login />
      <SignUp />
    </Container>
  );
}

export default Authentication;