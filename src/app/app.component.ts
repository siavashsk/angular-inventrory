import { RouterModule } from '@angular/router';
import {
  ChangeDetectionStrategy,
  Component,
  model,
  signal,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface ITodo {
  id: number;
  description: string;
  done: boolean;
}

@Component({
  selector: 'app-root',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  todoList = signal<ITodo[]>([]);

  description = model('');

  save(): void {
    const obj: ITodo = {
      description: this.description(),
      done: false,
      id: this.todoList().length + 1,
    };
    console.log(obj);
    this.todoList().push(obj);
    this.description.set('');
  }

  checkmarkChanged(index: number): void {
    this.todoList()[index].done = this.todoList()[index].done;
    this.todoList.set(this.todoList());
  }
}
