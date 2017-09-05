const cellKey = (row, column) => `${row}_${column}`;

const isCellAlive = (cells, row, column) => cells[cellKey(row, column)];

const toggleCellState = (cells, row, column) => {
  const key = cellKey(row, column);
  return {...cells, [key]: !cells[key]};
};

const tick = cells => {
  const numberOfNeighbours = {};
  for (let key in cells) {
    const [row, column] = key.split('_').map(p => parseInt(p, 10));
    numberOfNeighbours[key] = numberOfNeighbours[key] || 0;
    [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]].forEach(function ([offsetRow, offsetCol]) {
      const neighbourKey = cellKey(row + offsetRow, column + offsetCol);
      numberOfNeighbours[neighbourKey] = (numberOfNeighbours[neighbourKey] || 0) + 1;
    });
  }
  const result = {};
  for (let key in numberOfNeighbours) {
    if (numberOfNeighbours[key] === 3 || (cells[key] && numberOfNeighbours[key] === 2)) {
      result[key] = true;
    }
  }
  return result;

};

export {isCellAlive, toggleCellState, tick};