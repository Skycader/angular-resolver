import { Injectable } from '@angular/core';
import { catchError, delay, filter, map, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users$ = of([
    {
      name: 'Alex',
      age: 23,
    },
    {
      name: 'Rodes',
      age: 44,
    },
    {
      name: 'Alice',
      age: 12,
    },
  ]);
  constructor() { }

  public getUsers() {
    return this.users$.pipe(delay(3000));
  }
  public getUser(name: string) {
    console.log('GETTING USER');
    return this.users$.pipe(
      delay(3000),
      map(
        (users: User[]) => users.filter((user: User) => user.name === name)[0],
      ),
    );
  }
}
