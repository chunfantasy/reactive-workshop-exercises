import React, { Component, useEffect, useState } from 'react';
import { render } from 'react-dom';

const restful = MyComponent => ({ url, ...props }) => {
  const [data, setState] = useState();
  useEffect(() => {
    fetch(url)
      .then(response => response.text())
      .then(setState);
  }, [url]);
  return <MyComponent {...props} data={data} />;
};

const restful1 = MyComponent =>
  class extends Component {
    state = {};

    componentDidMount = () =>
      fetch(this.props.url)
        .then(response => response.text())
        .then(data => this.setState({ data }));

    render = () => <MyComponent {...this.props} {...this.state} />;
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
