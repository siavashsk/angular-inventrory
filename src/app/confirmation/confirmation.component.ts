import { Component } from '@angular/core';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation',
  imports: [MatDialogActions, MatDialogContent, MatDialogTitle],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss',
})
export class ConfirmationComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmationComponent>) {}

  closeDialog(message: string) {
    this.dialogRef.close(message);
  }
}
