import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Helmet from 'react-helmet';
import { selectCurrentUser } from '../../store/user/userSelectors';
 
import {
  SignUp,
  Login,
  Container
} from './index.styles';

const Authentication = () => {
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser])

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