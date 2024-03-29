import React, { Component } from 'react';
class Players extends Component {
  state = {
    players: Array.from({ length: 5 }, (e, i) => ({
      id: i,
      name: `player-${i}`
    }))
  };
  remove = id => {
    this.setState(({ players }) => {
      return {
        players: players.filter(player => player.id !== id)
      };
    });
  };
  render() {
    return (
      <div>
        {this.state.players.map(({ id, name }) => {
          return (
            <div onClick={() => this.remove(id)} key={id}>
              {name}
            </div>
          );
        })}
      </div>
    );
  }
}
export default Players;
