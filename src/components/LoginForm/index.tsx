import { useState, ChangeEvent, FormEvent } from 'react'; 
import { useAppDispatch } from '../../store/store';

import { 
  signInWithEmailAsync,
  signInWithGoogleAsync
 } from '../../store/user/userThunks';
import FormField from '../FormField';
import CustomButton from '../CustomButton';

import {
  ButtonContainer
} from './index.styles.jsx';

type LoginFormProps = {
  className?: string
}

const LoginForm = ({ className }: LoginFormProps) => {
  // DEFAULT STATE
  const defaultFieldValues = {
    email: '',
    password: ''
  };

  // STATE SETUP
  const [fieldValues, setFieldValues] = useState(defaultFieldValues);

  // DESTRUCTURED STATE
  const {email, password} = fieldValues;

  // HOOKS
  const dispatch = useAppDispatch();

  // HELPERS
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFieldValues({...fieldValues, [name]: value});
  }

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(signInWithEmailAsync(fieldValues));
  }

  const logGoogleUser = async () => {
    dispatch(signInWithGoogleAsync());
  }

  return(
    <div className={className}>
      <h2>Already have an account?</h2>
      <p>Sign in with your email and password</p>

      <form onSubmit={submitHandler}>
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
        <ButtonContainer>
          <CustomButton type='submit'>Sign In</CustomButton>
          <span> OR </span>
          <CustomButton type='button' buttonType='google' onClick={logGoogleUser}>Sign in With Google</CustomButton>
        </ButtonContainer>
      </form>
    </div>
  );
}

export default LoginForm;