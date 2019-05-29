import React, { useState } from 'react';
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  return { value, onChange: event => setValue(event.target.value) };
};
const LoginForm = () => {
  const [username, password] = ['', ''].map(useFormInput);
  const login = event => {
    alert(`Submitted ${username.value}:${password.value}`);
    event.preventDefault();
  };
  return (
    <form onSubmit={login}>
      Username: <input type="text" {...username} />
      Password: <input type="password" {...password} />
      <input type="submit" value="Login" />
    </form>
  );
};
export default LoginForm;
