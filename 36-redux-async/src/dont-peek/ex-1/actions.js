export const toggle = (row, column) => ({
  type: 'TOGGLE',
  row,
  column
});
const replace = isAlive => ({
  type: 'REPLACE',
  isAlive
});
export const tick = isAlive => dispatch => {
  fetch('/api/gameOfLife', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(isAlive)
  })
    .then(response => response.json())
    .then(isAlive => dispatch(replace(isAlive)));
};
