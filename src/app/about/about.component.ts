import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  imports: [CommonModule, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  title = 'About us';
  description = 'Feel free to reach out!';
  users = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];

  onSubmit() {
    console.log('Form submitted!');
  }
}
