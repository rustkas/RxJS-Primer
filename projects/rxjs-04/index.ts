import { fromEvent } from 'rxjs';
import { of } from 'rxjs';
import { filter } from 'rxjs/operators';

const dataSource = of(1, 2, 3, 4, 5);

// subscribe to our source observable
const subscription = dataSource
  .pipe(
    // only accept values 2 or greater
    filter((value) => value >= 2)
  )
  // log: 2, 3, 4, 5
  .subscribe((value) => console.log(value));

// Stop streams
subscription.unsubscribe();
if (!subscription.closed) {
  console.log('Add unsubscribe button listener');
  const stop_stream$ = fromEvent(
    document.getElementById('stop_stream'),
    'click'
  );
  const stop_stream_subscription = stop_stream$.subscribe((_element) => {
    // clean up with unsubscribe
    subscription.unsubscribe();
    stop_stream_subscription.unsubscribe();
  });
}
