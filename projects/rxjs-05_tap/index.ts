import { of, map, tap } from 'rxjs';

of(1, 2, 3)
  .pipe(
    map((x) => x * 2),
    tap(() => {
      throw new TypeError(`Exception`);
    })
  )
  .subscribe(console.log);

// Error: Exception
