import { useEffect } from 'react';
import { 
  auth,
  signInWithGooglePopup, 
  signInWithGoogleRedirect, 
  createUserDocumentFromAuth 
} from '../../utils/firebase/firebase';
import { getRedirectResult } from 'firebase/auth';

const SignIn = () => {
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const response = await getRedirectResult(auth);
    
    if (response) {
      createUserDocumentFromAuth(response.user);
    }
  }
  
  const logGoogleUser = async () => {
    const response  = await signInWithGooglePopup();
    createUserDocumentFromAuth(response.user);
  }

  const logGoogleRedirectUser = async () => {
    const response  = await signInWithGoogleRedirect();
    console.log(response.user);
  }

  return (
    <div className='sign-in'>
      SIGN IN

      <button onClick={logGoogleUser}>SIGN IN WITH GOOGLE POPUP</button>
      <button onClick={logGoogleRedirectUser}>SIGN IN WITH GOOGLE REDIRECT</button>
    </div>
  );
}

export default SignIn;