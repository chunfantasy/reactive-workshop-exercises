import React, {Component} from 'react';

class ThemeSelectionForm extends Component {
  constructor() {
    super();
    this.state = {theme: 'dark'};
  }
  submit = event => {
    alert(`Selected theme: ${this.state.theme}`);
    event.preventDefault();
  }
  onChange = event => this.setState({theme: event.target.value});
  render() {
    return <form onSubmit={this.submit}>
      <label>
        Theme:
        <select value={this.state.theme} onChange={this.onChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
      <input type="submit" value="Set" />
    </form>;
  }
}

export default ThemeSelectionForm;
