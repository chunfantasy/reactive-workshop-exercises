EXERCISE
---

Implement the AutoRefresh component that re-renders its content every _period_ milliseconds.

````html
const CurrentTime = () => <div>{new Date().toLocaleTimeString()}</div>;
const Clock = () => <AutoRefresh period={1000} Component={CurrentTime} />;
````
