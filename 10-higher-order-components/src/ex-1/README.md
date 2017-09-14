EXERCISE
---

Implement the autoRefresh({period: 1000}) HOC so that it re-renders its content every _period_ milliseconds.

````html
const CurrentTime = () => <div>{new Date().toLocaleTimeString()}</div>;
const Clock = autoRefresh({period: 1000})(CurrentTime);
````
