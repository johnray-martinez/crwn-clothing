import { 
  signInWithGooglePopup, 
  createUserDocumentFromAuth 
} from '../../utils/firebase/firebase';
import SignUpForm from '../../components/SignUpForm';
import CustomButton from '../../components/CustomButton';

const SignIn = () => {
  const logGoogleUser = async () => {
    const response  = await signInWithGooglePopup();
    createUserDocumentFromAuth(response.user);
  }

  return (
    <div className='sign-in'>
      <SignUpForm />
      <CustomButton type='button' buttonType='google' onClick={logGoogleUser}>Sign in With Google</CustomButton>
    </div>
  );
}

export default SignIn;