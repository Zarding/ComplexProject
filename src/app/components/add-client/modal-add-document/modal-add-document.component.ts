import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-add-document',
  templateUrl: './modal-add-document.component.html',
  styleUrls: ['./modal-add-document.component.css']
})
export class ModalAddDocumentComponent {
  constructor(public dialogRef: MatDialogRef<ModalAddDocumentComponent>) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  onAddClick(): void {
    this.dialogRef.close();
  }
}
