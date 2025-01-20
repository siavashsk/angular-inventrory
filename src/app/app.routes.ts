import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
];
