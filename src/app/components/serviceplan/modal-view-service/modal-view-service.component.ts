import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TypeServicesPlan } from 'src/app/class/typeservicesplan';

@Component({
  selector: 'app-modal-view-service',
  templateUrl: './modal-view-service.component.html',
  styleUrls: ['./modal-view-service.component.css']
})
export class ModalViewServiceComponent {
  constructor(private dialogRef: MatDialogRef<ModalViewServiceComponent>) {}
  typeservicesplan? : TypeServicesPlan;
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {

  }
}
