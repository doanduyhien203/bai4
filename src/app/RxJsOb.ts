import { fromEvent, map, Observable, Subscription, throttleTime } from 'rxjs';
const rate = 1000;
let lastMove = Date.now() - rate;
/*
document.addEventListener('mousemove', (ev) => {
  if (Date.now() - lastMove >= rate) {
    console.log(ev);
    lastMove = Date.now();
  }
});

fromEvent(document, 'mousemove')
  .pipe(
    throttleTime(1000),
    map((ev: MouseEvent) => ev.clientX + ' ' + ev.clientY)
  )
  .subscribe(console.log);
*/
const observable = new Observable(function subscribe(observer) {
  const id = setInterval(() => {
    observer.next('Hello Rxjs');
    //    observer.complete();
  }, 1000);
  return function unsubscribe() {
    observer.complete();
    //    clearTimeout(id);
    clearInterval(id);
  };
});
const subscription = observable.subscribe(
  (val) => console.log(val),
  (err) => console.error(err),
  () => console.log('complete')
);
//subscription.add(observable.subscribe(console.log));
setTimeout(() => {
  subscription.unsubscribe();
}, 5000);
