import React, {Component} from 'react';
class IllustrateMergingStateUpdates extends Component {
  constructor() {
    super();
    this.state = {
      address: {
        street: 'Samurai Way'
      }
    };
  }
  componentDidMount() {
    this.setState({firstName: 'Myamoto'});
    this.setState({lastName: 'Musashi'});
    this.setState({address: {no: 1}});
  }
  render() {
    return <pre>{JSON.stringify(this.state, 2, ' ')}</pre>;
  }
}
export default IllustrateMergingStateUpdates;
