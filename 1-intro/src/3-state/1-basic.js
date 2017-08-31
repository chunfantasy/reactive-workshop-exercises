import React, {Component} from 'react';

export default class Clock extends Component {
  constructor() {
    super();
    this.state = {time: new Date()};
    //this.setState({time: new Date()});
  }
  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({time: new Date()}),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return <div>Time: {this.state.time.toLocaleTimeString()}</div>;
  }
}
