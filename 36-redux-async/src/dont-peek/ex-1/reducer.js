const cellKey = (row, column) => `${row}_${column}`;

const reducer = (state = {}, action) => {
  if (action.type === 'TOGGLE') {
    const key = cellKey(action.row, action.column);
    const newState = { ...state };
    newState[key] = !newState[key];
    return newState;
  } else if (action.type === 'REPLACE') {
    return action.isAlive;
  }
  return state;
};

export default reducer;
