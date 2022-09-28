// import the fromEvent operator
import { fromEvent } from 'rxjs';

// grab button reference
const button = document.getElementById('myButton');

// create an observable of button clicks
const myObservable = fromEvent(button, 'click');

// addEventListener called
const subscription = myObservable.subscribe((event) => console.log(`Event #1 ${event}`));

// addEventListener called again!
const secondSubscription = myObservable.subscribe((event) =>
  console.log(`Event #2 ${event}`)
);

// Stop streams

const stop_stream$ = fromEvent(document.getElementById('stop_stream'), 'click');
const stop_stream_subscription = stop_stream$.subscribe((_element) => {
  // clean up with unsubscribe
  subscription.unsubscribe();
  secondSubscription.unsubscribe();
  stop_stream_subscription.unsubscribe();
});
