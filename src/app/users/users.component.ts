import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  template: ` <h1>Parent Component</h1> `,
})
export class UsersComponent {
  title = 'Users Page';
  isVisible = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
