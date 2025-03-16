import { RouterModule } from '@angular/router';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
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
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmationComponent } from './confirmation/confirmation.component';

interface ITodo {
  id: number;
  description: string;
  done: boolean;
}

@Component({
  selector: 'app-root',
  imports: [
    ConfirmationComponent,
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
    MatDialogModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  todoList = signal<ITodo[]>([]);

  description = model('');

  readonly dialog = inject(MatDialog);

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
    this.todoList()[index].done = !this.todoList()[index].done;
    this.todoList.set(this.todoList());
  }

  deleteConfirmation(item: ITodo): void {
    this.dialog
      .open(ConfirmationComponent, {
        width: '250px',
      })
      .afterClosed()
      .subscribe((res: any) => {
        console.log(res);
      });
  }
}
