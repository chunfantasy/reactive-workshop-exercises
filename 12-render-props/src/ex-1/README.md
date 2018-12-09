## EXERCISE

Implement a Fetch component that encapsulates making an HTTP GET request (using fetch api, for example) and using render prop to render the response.

```javascript
const App = () => (
  <div>
    <Fetch
      url="/api/ipify"
      render={({ data }) => <div>Your IP address is: {data}</div>}
    />
  </div>
);
```
