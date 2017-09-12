import {createStore} from 'redux';

const reducer = (state = 0, action) => {
  return action.type === 'INCREMENT' ? state + 1 : state;
};
const {subscribe, getState, dispatch} = createStore(reducer);

subscribe(() => console.log('State changed', getState()));

dispatch({type: 'INCREMENT'});
dispatch({type: 'UNSUPPORTED'});
dispatch({type: 'INCREMENT'});
