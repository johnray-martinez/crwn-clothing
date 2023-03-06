import { useState } from 'react';
import { redirect } from 'react-router-dom';
import { createUserDocumentWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase';

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
    <form className='signup-form' onSubmit={submitHandler}>
      <label>Display Name</label>
      <input name='displayName' type="text" value={displayName} onChange={changeHandler} required />

      <label>Email</label>
      <input name='email' type="email" value={email} onChange={changeHandler} required />

      <label>Password</label>
      <input name='password' type="password" value={password} onChange={changeHandler} required />

      <label>Confirm Password</label>
      <input name='confirmPassword' type="password" value={confirmPassword} onChange={changeHandler} required/>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default SignUpForm;