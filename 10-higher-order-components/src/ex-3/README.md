EXERCISE
---

Implement the restful() HOC so that it encapsulates making HTTP GET requests (using fetch api). 

````html
const MyIp = restful(
  ({label, data}) => <div>{label}: {data}</div>
);
const MessageOfTheDay = restful(
  ({data}) => <div>Welcome, your message of the day is: {data}</div>
);

ReactDOM.render(
  <div>
    <MyIp url="/api/ipify" label="Current time:" />
    <MessageOfTheDay url="/api/motd" />
  </div>,
  document.getElementById('root-ex-3')
);
````
