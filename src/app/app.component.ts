import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular';
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigateByUrl('/');
  }

  navigateToAbout() {
    this.router.navigateByUrl('/about');
  }

  navigateToUsers() {
    this.router.navigateByUrl('/users');
  }
}
