import React, {Component} from 'react';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {username: ''};
  }
  login = event => {
    alert(`Submitted username: ${this.state.username}`);
    event.preventDefault();
  }
  onChange = event => this.setState({username: event.target.value});
  render() {
    return <form onSubmit={this.login}>
      <label>
        Username:
        <input type="text" value={this.state.username} onChange={this.onChange} />
      </label>
      <input type="submit" value="Login" />
    </form>;
  }
}

export default LoginForm;
