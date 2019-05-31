## Exercise

Implement the AutoRefresh component that automatically re-renders itself every `interval` (passed as a prop) millisecnds and uses render prop to render content.

```javascript
const App = () => (
  <AutoRefresh
    interval={1000}
    render={({ now }) => <div>The current time is: {now.toLocaleTimeString()}</div>}
  />
);
```
