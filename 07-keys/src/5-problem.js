import React, {Component} from 'react';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: true};
  }
  toggle = e => {
    e.stopPropagation();
    this.setState(({visible}) => ({visible: !visible}));
  }
  render() {
    return <div onClick={this.props.remove}>
      <button onClick={this.toggle}>Toggle</button>
      {this.state.visible ? this.props.name : null}
    </div>;
  }
}
class Players extends Component {
  constructor() {
    super();
    this.state = {
      players: Array.from(
        {length: 5},
        (e, i) => ({id: i, name: `player-${i}`})
      )
    };
  }
  remove = (id) => {
    this.setState(({players}) => {
      return {
        players: players.filter(player => player.id !== id)
      };
    });
  }
  render() {
    return <div>
      Without key:
      <div>
        {this.state.players.map(({id, name}) => {
          return <Player name={name} remove={() => this.remove(id)} />;
        })}
      </div>
      With key:
      <div>
        {this.state.players.map(({id, name}) => {
          return <Player key={id} name={name} remove={() => this.remove(id)} />;
        })}
      </div>
    </div>
  }
}
export default Players;
