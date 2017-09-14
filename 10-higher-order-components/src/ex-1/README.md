EXERCISE
---

Implement the autoRefresh({period: 1000}) HOC so that it re-renders its content every _period_ milliseconds.

````html
<!-- const Clock = autoRefresh(CurrentTime); -->
const Clock = autoRefresh({period: 1000})(
  ({label}) => <div>{label}: {new Date().toLocaleTimeString()}</div>
);

ReactDOM.render
  <Clock label="Current time:" />,
  document.getElementById('root-ex-1')
);
````
