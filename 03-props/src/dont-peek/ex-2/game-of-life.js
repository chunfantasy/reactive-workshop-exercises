import React from 'react';
import PropTypes from 'prop-types';
import './game-of-life.css';

const GameOfLife = ({n, width, height}) => <div>
  <div style={{width: n * width, height: n * height}}>
    {
      Array.from({length: n * n})
        .map((value, index) => ({x: index % n, y: Math.floor(index / n)}))
        .map(({x, y}) => <div
          className={'cell' + ((x + y) % 2 ? '' : ' alive')}
          style={{
            top: 20 * x,
            left: 20 * y,
            width,
            height
          }}
        />)
    }
  </div>
  <button>Tick</button>
</div>;

GameOfLife.propTypes = {
  n: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number
};

GameOfLife.defaultProps = {
  n: 10,
  width: 20,
  height: 20
};

export default GameOfLife;
