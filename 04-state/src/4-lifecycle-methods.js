import React, {Component} from 'react';

class Clock extends Component {
  constructor() {
    super();
    this.state = {now: new Date()};
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({now: new Date()}),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {now} = this.state;
    return <div>{now.toLocaleTimeString()}</div>;
  }
}

export default Clock;
