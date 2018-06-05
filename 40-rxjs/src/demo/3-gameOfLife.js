import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import "./3-gameOfLife.css";

const cellKey = (row, column) => `${row}_${column}`;
const gameOfLife = Observable.merge(
  Observable.fromEvent(document.getElementById("grid"), "click").map(
    ({ target }) => ({
      type: "toggle",
      row: parseInt(target.getAttribute("data-row"), 10),
      column: parseInt(target.getAttribute("data-column"), 10)
    })
  ),
  Observable.fromEvent(document.getElementById("tick"), "click").map(e => ({
    type: "tick"
  }))
).scan((currentState, { type, row, column }) => {
  if (type === "toggle") {
    const key = cellKey(row, column);
    const { [key]: isAlive, ...result } = currentState;
    return isAlive ? result : { [key]: true, ...result };
  }
  if (type === "tick") {
    const numberOfNeighbours = {};
    for (let key in currentState) {
      const [row, column] = key.split("_").map(p => parseInt(p, 10));
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
        (currentState[key] && numberOfNeighbours[key] === 2)
      ) {
        result[key] = true;
      }
    }
    return result;
  }
  return currentState;
}, {});

const { children: cells } = document.getElementById("grid");
gameOfLife.subscribe(isAlive =>
  Array.prototype.forEach.call(cells, cell =>
    cell.classList.toggle(
      "alive",
      !!isAlive[
        cellKey(cell.getAttribute("data-row"), cell.getAttribute("data-column"))
      ]
    )
  )
);
