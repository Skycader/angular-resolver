import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable, Subject } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  public users$!: Observable<User[]>;
  constructor(private userService: UserService) { }

  public ngOnInit() {
    this.users$ = this.userService.getUsers();
  }
}
