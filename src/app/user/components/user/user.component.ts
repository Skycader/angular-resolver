import { Component, Input } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input() user!: User;
}
