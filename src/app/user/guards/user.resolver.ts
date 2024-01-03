import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, catchError, delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<User> {
  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<User> | Promise<User> | User {
    console.log(route);
    return this.userService.getUser(route.params['name']).pipe(
      delay(3000),
      catchError((err: any, caught: Observable<User>) => {
        this.router.navigate(['']);
        return of({
          name: 'Not found',
          age: 0,
        });
      }),
    );
  }
}
