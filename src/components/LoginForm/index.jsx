import { useState, useContext } from 'react'; 
import { 
  signInWithGooglePopup, 
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword
} from '../../utils/firebase/firebase';
import { UserContext } from '../../context/user';
import FormField from '../FormField';
import CustomButton from '../CustomButton';

const LoginForm = () => {
  // DEFAULT STATE
  const defaultFieldValues = {
    email: '',
    password: ''
  };

  // STATE SETUP
  const [fieldValues, setFieldValues] = useState(defaultFieldValues);

  // CONTEXT
  const { setCurrentUser } = useContext(UserContext);

  // DESTRUCTURED STATE
  const {email, password} = fieldValues;

  // HELPERS
  const changeHandler = (event) => {
    const {name, value} = event.target;
    setFieldValues({...fieldValues, [name]: value});
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    
    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);
      setCurrentUser(user);
    } catch (err) {
      console.error(err.message);
    }
  }

  const logGoogleUser = async () => {
    const response  = await signInWithGooglePopup();
    createUserDocumentFromAuth(response.user);
  }

  return(
    <div className='login-form__container'>
      <h2>Already have an account?</h2>
      <p>Sign in with your email and password</p>

      <form className='login-form' onSubmit={submitHandler}>
        <FormField 
          label='email'
          name='email'
          value={email}
          type='email'
          required
          onChange={changeHandler}
        />
         <FormField 
          label='password'
          name='password'
          type='password'
          value={password}
          required
          onChange={changeHandler}
        />
        <CustomButton type='submit'>Sign In</CustomButton>
        <CustomButton type='button' buttonType='google' onClick={logGoogleUser}>Sign in With Google</CustomButton>

      </form>
    </div>
  );
}

export default LoginForm;