import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import thunk from 'redux-thunk';

const requestIpAddress = () => ({
  type: 'REQUEST_IP_ADDRESS'
});
const receiveIpAddress = ipAddress => ({
  type: 'RECEIVE_IP_ADDRESS',
  ipAddress
});
const fetchIpAddress = () => dispatch => {
  dispatch(requestIpAddress());
  fetch('/api/ipify')
    .then(response => response.text())
    .then(ipAddress => dispatch(receiveIpAddress(ipAddress)));
};

let IpAddress = ({ ipAddress, isFetching, onRefresh }) => (
  <div>
    <button onClick={onRefresh}>Get my IP</button>
    {isFetching ? 'Loading...' : ipAddress}
  </div>
);
IpAddress = connect(
  ({ ipAddress, isFetching }) => ({ ipAddress, isFetching }),
  dispatch => ({ onRefresh: () => dispatch(fetchIpAddress()) })
)(IpAddress);

const store = createStore((state = {}, action) => {
  if (action.type === 'REQUEST_IP_ADDRESS') {
    return {
      ...state,
      isFetching: true
    };
  }
  if (action.type === 'RECEIVE_IP_ADDRESS') {
    return {
      isFetching: false,
      ipAddress: action.ipAddress
    };
  }
  return state;
}, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <IpAddress />
  </Provider>,
  document.getElementById('root')
);
