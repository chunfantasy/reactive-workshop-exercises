## Message of the day

Implement a React component that randomly picks and renders one of these messages of the day:

````
const messages = [
  'They don’t make bugs like Bunny anymore.',
  'Talk is cheap. Show me the code.',
  'Measuring programming progress by lines of code is like measuring aircraft building progress by weight.',
  'The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.',
  'In theory, theory and practice are the same. In practice, they’re not.',
  'Good design adds value faster than it adds cost.'
]
````

## Chess Board

Implement a React component that renders an 8x8 chess board.

````
.board {
  position: relative;
}

.square {
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: white;
  border-width: 1px;
  border-style: solid;
  border-color: gray;
}

.black {
  background-color: black;
}
````

````
<div class="board">
  <div class="black" style="top: 00px; left: 00px" />
  <div style="top: 00px; left: 20px" />

  <div style="top: 20px; left: 00px" />
  <div class="black" style="top: 20px; left: 20px" />
</div>
````