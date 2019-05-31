## Exercise

Implement the restful() HOC so that it encapsulates making HTTP GET requests (using fetch api).

```javascript
const MyIp = restful(({ label, data }) => (
  <div>
    {label}: {data}
  </div>
));
const MessageOfTheDay = restful(({ data }) => (
  <div>Welcome, your message of the day is: {data}</div>
));

render(
  <div>
    <MyIp url="/api/ipify" label="IP Address:" />
    <MessageOfTheDay url="/api/motd" />
  </div>,
  document.getElementById('root-ex-3')
);
```
