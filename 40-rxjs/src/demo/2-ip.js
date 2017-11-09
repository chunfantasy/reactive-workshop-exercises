import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

const myIp = Observable.merge(
  Observable.timer(0, 10000),
  Observable.fromEvent(document.getElementById('refresh'), 'click')
).throttleTime(1000)
  .flatMap(() => Observable.fromPromise(fetch('https://api.ipify.org').then(response => response.text())));

myIp.subscribe(result => console.log('myIp', result));
