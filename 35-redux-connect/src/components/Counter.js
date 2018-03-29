import React from 'react';
import {connect} from 'react-redux';
import {increment} from '../actions';

let Counter = ({value, onIncrement}) => <p>
  {value}
  <button onClick={onIncrement}>+</button>
</p>;
Counter = connect(
  (state, ownProps) => ({value: state.value}),
  (dispatch, ownProps) => ({onIncrement: () => dispatch(increment())})
)(Counter);

export default Counter;
