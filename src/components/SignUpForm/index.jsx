import { useState } from 'react';
import { redirect } from 'react-router-dom';
import { createUserDocumentWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase';
import FormField from '../FormField';

const SignUpForm = () => {
  const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

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

    try {
      const {user} = await createUserDocumentWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth({...user, displayName});
      
      return redirect('/');

    } catch (err) {
      console.log(err.message);
    }
  }

  return(
    <div className='signup-form__container'>
      <h2>Don't have an account?</h2>
      <p>Sign up with your email and password.</p>
      <form className='signup-form' onSubmit={submitHandler}>
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

        <button type='submit'>Submit</button>
      </form>
    </div>

  );
}

export default SignUpForm;