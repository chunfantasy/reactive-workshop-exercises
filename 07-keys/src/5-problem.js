import React, { Component } from 'react';

class Player extends Component {
  state = { visible: true };
  toggle = () => this.setState(({ visible }) => ({ visible: !visible }));
  render = () => (
    <div>
      <button onClick={this.props.remove}>Remove</button>
      <button onClick={this.toggle}>Toggle</button>
      {this.state.visible && this.props.name}
    </div>
  );
}
class Players extends Component {
  state = {
    players: Array.from({ length: 5 }, (e, i) => ({
      id: i,
      name: `player-${i + 1}`
    }))
  };
  remove = id =>
    this.setState(({ players }) => ({
      players: players.filter(player => player.id !== id)
    }));
  render = () => (
    <div>
      Using index as a key:
      <div>
        {this.state.players.map(({ id, name }, index) => (
          <Player key={index} name={name} remove={() => this.remove(id)} />
        ))}
      </div>
      Using id as key:
      <div>
        {this.state.players.map(({ id, name }) => (
          <Player key={id} name={name} remove={() => this.remove(id)} />
        ))}
      </div>
    </div>
  );
}
export default Players;
