import React, { Component } from 'react';
// prettier-ignore
class LoginForm extends Component {
  state = { username: '', password: '' };
  login = event => {
    alert(`Submitted ${this.state.username}:${this.state.password}`);
    event.preventDefault();
  };
  onChange = event => this.setState({ [event.target.name]: event.target.value });
  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.login}>
        Username:
        <input type="text" name="username" value={username} onChange={this.onChange} />
        Password:
        <input type="password" name="password" value={password} onChange={this.onChange} />
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default LoginForm;
