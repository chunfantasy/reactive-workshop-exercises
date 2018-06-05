import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const toggleable = () => AComponent => {
  return class Toggleable extends Component {
    state = { isOn: true };

    toggle = () => {
      this.setState(({ isOn }) => ({ isOn: !isOn }));
    };

    render() {
      return (
        <AComponent
          isOn={this.state.isOn}
          toggle={this.toggle}
          {...this.props}
        />
      );
    }
  };
};

const User = toggleable()(({ isOn, toggle, user }) => (
  <div>
    <button onClick={toggle}>Toggle</button>
    {isOn && user.name}
  </div>
));
const Account = toggleable()(({ isOn, toggle, account }) => (
  <div>
    <button onClick={toggle}>Toggle</button>
    {isOn && account.balance}
  </div>
));

ReactDOM.render(
  <div>
    <User user={{ name: 'Myamoto' }} />
    <Account account={{ balance: 123 }} />
  </div>,
  document.getElementById('root-ex-2')
);
