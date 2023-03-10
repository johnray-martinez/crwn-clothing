import { useState } from 'react';
import { redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpUserAsync } from '../../store/user/userThunks';
import { createUserDocumentWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase';
import FormField from '../FormField';
import CustomButton from '../CustomButton';

const SignUpForm = ({className}) => {
  const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const changeHandler = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value});
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      console.error('passwords do not match');
      return;
    }

    dispatch(signUpUserAsync(formFields));
  }

  return(
    <div className={className}>
      <h2>Don't have an account?</h2>
      <p>Sign up with your email and password</p>
      <form onSubmit={submitHandler}>
        <FormField
          label='Display Name'
          name='displayName' 
          type="text" 
          value={displayName} 
          onChange={changeHandler} 
          required 
        />

        <FormField
          label='Email'
          name='email' 
          type='email'
          value={email} 
          onChange={changeHandler} 
          required 
        />

        <FormField
          label='Password'
          name='password' 
          type='password' 
          value={password} 
          onChange={changeHandler} 
          required 
        />

        <FormField
          label='Confirm Password'
          name='confirmPassword' 
          type='password'
          value={confirmPassword} 
          onChange={changeHandler} 
          required 
        />  

        <CustomButton type='submit'>Sign Up</CustomButton>
      </form>
    </div>

  );
}

export default SignUpForm;