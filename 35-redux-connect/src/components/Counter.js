import React from 'react';
import {connect} from 'react-redux';
import {increment} from '../actions';

let Counter = ({value, onIncrement}) => <p>
  {value}
  <button onClick={onIncrement}>+</button>
</p>;

Counter = connect(
  ({value}) => ({value}),
  dispatch => ({onIncrement: () => dispatch(increment())})
)(Counter);

export default Counter;
