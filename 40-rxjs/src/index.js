import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

const timer = Observable.timer(0, 10000);
// timer.subscribe(() => console.log('Hello from timer'));

const refresh = Observable.fromEvent(document.getElementById('refresh'), 'click');
// refresh.subscribe(() => console.log('Hello from refresh'));

const myIp = () => Observable.fromPromise(
  fetch('https://api.ipify.org')
    .then(response => response.text())
);
// myIp().subscribe(ip => console.log('MyIP', ip));

const result = timer
  .merge(refresh)
  .throttleTime(1000)
  .flatMap(myIp)
result.subscribe(result => console.log('Hello', result));
