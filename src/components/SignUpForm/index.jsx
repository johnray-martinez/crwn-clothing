import { useState } from 'react';

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

  return(
    <form className='signup-form'>
      <label>Display Name</label>
      <input name='displayName' type="text" value={displayName} onChange={changeHandler} required />

      <label>Email</label>
      <input name='email' type="email" value={email} onChange={changeHandler} required />

      <label>Password</label>
      <input name='password' type="password" value={password} onChange={changeHandler} required />

      <label>Confirm Password</label>
      <input name='confirmPassword' type="password" value={confirmPassword} onChange={changeHandler} required/>
    </form>
  );
}

export default SignUpForm;