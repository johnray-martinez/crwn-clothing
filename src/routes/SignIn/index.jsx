import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase';

const SignIn = () => {
  const logGoogleUser = async () => {
    const response  = await signInWithGooglePopup();
    createUserDocumentFromAuth(response.user);
  }

  return (
    <div className='sign-in'>
      SIGN IN

      <button onClick={logGoogleUser}>SIGN IN WITH GOOGLE</button>
    </div>
  );
}

export default SignIn;