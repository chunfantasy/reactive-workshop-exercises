import React, { useState } from 'react';
// prettier-ignore
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const login = event => {
    alert(`Submitted ${username}:${password}`);
    event.preventDefault();
  };
  return (
    <form onSubmit={login}>
      Username:
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      Password:
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <input type="submit" value="Login" />
    </form>
  );
};

export default LoginForm;
