## Exercise

Implement a React Countdown component. Component should accept end date through props and should either show seconds remaining or string "Time's up". Seconds should update once every second.

```javascript
<Countdown to={new Date((new Date()).getFullYear() + 1, 0)} /> seconds 'till New Year!
<Countdown to={new Date(Date.now() + 10000)} />
```
