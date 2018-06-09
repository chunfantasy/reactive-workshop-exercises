import React, { Component } from 'react';
import { render } from 'react-dom';

const restful = MyComponent =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      fetch(props.url)
        .then(response => response.text())
        .then(data => this.setState({ data }));
    }

    render() {
      const props = {
        data: this.state.data,
        ...this.props
      };
      return <MyComponent {...props} />;
    }
  };

const MyIp = restful(({ label, data }) => (
  <div>
    {label}
    {data}
  </div>
));
const MessageOfTheDay = restful(({ data }) => (
  <div>Welcome, your message of the day is: {data}</div>
));

render(
  <div>
    <MyIp url="/api/ipify" label="Your IP address is: " />
    <MessageOfTheDay url="/api/motd" />
  </div>,
  document.getElementById('root-ex-3')
);
