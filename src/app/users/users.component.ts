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

  users = [
    { name: 'Alice', status: 'active' },
    { name: 'Bob', status: 'inactive' },
    { name: 'Charlie', status: 'active' },
    { name: 'Daisy', status: 'inactive' },
  ];

  products = [
    {
      name: 'Laptop',
      price: 1200,
      category: 'electronics',
      addedOn: new Date(2023, 11, 20),
    },
    {
      name: 'Coffee Mug',
      price: 15.99,
      category: 'home essentials',
      addedOn: new Date(2023, 10, 15),
    },
    {
      name: 'Headphones',
      price: 250,
      category: 'electronics',
      addedOn: new Date(2023, 9, 5),
    },
  ];

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  toggleStatus() {
    this.users = this.users.map((user) => ({
      ...user,
      status: user.status === 'active' ? 'inactive' : 'active',
    }));
  }
}
