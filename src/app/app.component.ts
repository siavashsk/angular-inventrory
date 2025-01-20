import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, AboutComponent, UsersComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular';
  constructor(private router: Router, public authService: AuthService) {}

  navigateToHome() {
    this.router.navigateByUrl('/');
  }

  navigateToAbout() {
    this.router.navigateByUrl('/about');
  }

  navigateToUsers() {
    this.router.navigateByUrl('/users');
  }

  toggleLogin() {
    if (this.authService.isAuthenticated()) {
      this.authService.logout();
    } else {
      this.authService.login();
    }
  }
}
