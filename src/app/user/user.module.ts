import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { RouterModule } from '@angular/router';
import { UserResolver } from './guards/user.resolver';

import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
const routes = [
  {
    path: '',
    component: UserListComponent,
  },
  {
    path: 'user/:name',
    component: UserDetailsComponent,
    resolve: {
      user: UserResolver,
    },
  },
];

@NgModule({
  declarations: [UserComponent, UserListComponent, UserDetailsComponent],
  imports: [
    MatButtonModule,
    MatCardModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class UserModule {}
