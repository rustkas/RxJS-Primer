import { fromEvent } from 'rxjs';
import { of, map } from 'rxjs';
import {} from 'rxjs';
/*
 *  'of' allows you to deliver values in a sequence
 *  In this case, it will emit 1,2,3,4,5 in order.
 */
const dataSource = of(1, 2, 3, 4, 5);

// subscribe to our source observable
const subscription = dataSource
  .pipe(
    // add 1 to each emitted value
    map((value) => value + 1)
  )
  // log: 2, 3, 4, 5, 6
  .subscribe((value) => console.log(`${value-1} + 1 = ${value}`));

  // Stop streams
subscription.unsubscribe();
if(!subscription.closed){
  console.log('Add unsubscribe button listener');
  const stop_stream$ = fromEvent(document.getElementById('stop_stream'), 'click');
  const stop_stream_subscription = stop_stream$.subscribe((_element) => {
    // clean up with unsubscribe
    subscription.unsubscribe();
    stop_stream_subscription.unsubscribe();
  });
}

