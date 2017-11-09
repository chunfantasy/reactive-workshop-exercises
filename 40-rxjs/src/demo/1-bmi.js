import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

const bmi = Observable.combineLatest(
  Observable.timer(0, 100).take(75).map(year => Math.min(3 + year * 4, 70)),
  Observable.timer(0, 100).take(75).map(year => Math.min(0.55 + year * 0.08, 1.80)),
  (weight, height) => weight / (height * height)
);

bmi.subscribe(bmi => console.log('BMI', bmi));
