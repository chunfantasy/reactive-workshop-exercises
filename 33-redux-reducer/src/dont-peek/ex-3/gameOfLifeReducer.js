const cellKey = ({ row, column }) => `${row}_${column}`;

// prettier-ignore
const deltas = Array.from({ length: 9 }, (_, i) => [Math.floor(i / 3) - 1, (i % 3) - 1, i === 4 ? 0 : 1]);

const gameOfLife = function(state = {}, { type, ...payload }) {
  if (type === 'TOGGLE_CELL_STATE') {
    const key = cellKey(payload);
    const { [key]: isAlive, ...result } = state;
    return isAlive ? result : { [key]: true, ...result };
  }
  if (type === 'TICK') {
    const neighbours = Object.keys(state)
      .map(k => k.split('_').map(p => parseInt(p, 10)))
      .map(([r, c]) => deltas.map(([dr, dc, dn]) => [r + dr, c + dc, dn]))
      .flat()
      .map(([row, column, dn]) => [`${row}_${column}`, dn])
      .reduce((acc, [k, dn]) => ({ ...acc, [k]: (acc[k] || 0) + dn }), {});
    return Object.keys(neighbours)
      .filter(k => (state[k] && neighbours[k] === 2) || neighbours[k] === 3)
      .reduce((result, key) => ({ ...result, [key]: true }), {});
  }
  return state;
};

export default gameOfLife;
