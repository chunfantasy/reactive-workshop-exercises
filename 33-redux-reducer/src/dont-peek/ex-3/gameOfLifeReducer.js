const cellKey = (row, column) => `${row}_${column}`;

const gameOfLife = function(state = {}, action) {
  if (action.type === 'TOGGLE_CELL_STATE') {
    const { row, column } = action;
    const key = cellKey(row, column);
    const result = { ...state };
    result[key] = !result[key];
    return result;
  }
  if (action.type === 'TICK') {
    const numberOfNeighbours = {};
    for (let key in state) {
      const [row, column] = key.split('_').map(p => parseInt(p, 10));
      numberOfNeighbours[key] = numberOfNeighbours[key] || 0;
      [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1]
      ].forEach(function([offsetRow, offsetCol]) {
        const neighbourKey = cellKey(row + offsetRow, column + offsetCol);
        numberOfNeighbours[neighbourKey] =
          (numberOfNeighbours[neighbourKey] || 0) + 1;
      });
    }
    const result = {};
    for (let key in numberOfNeighbours) {
      if (
        numberOfNeighbours[key] === 3 ||
        (state[key] && numberOfNeighbours[key] === 2)
      ) {
        result[key] = true;
      }
    }
    return result;
  }
  return state;
};

export default gameOfLife;
