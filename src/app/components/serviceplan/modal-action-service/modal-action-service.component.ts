import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TypeServicesPlan } from 'src/app/class/typeservicesplan';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-modal-action-service',
  templateUrl: './modal-action-service.component.html',
  styleUrls: ['./modal-action-service.component.css']
})
export class ModalActionServiceComponent {
  typeservicesplan : TypeServicesPlan = new TypeServicesPlan();
  onAdd = new EventEmitter();

  constructor(private dialogRef: MatDialogRef<ModalActionServiceComponent>, public servServ : ServicesService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onAddClick(): void {
    this.onAdd.emit(this.typeservicesplan);
    this.servServ.updateTypeServicesPlan(this.typeservicesplan).subscribe(() => {
      this.dialogRef.close();
    });    
  }

  onKeyPress(event: any) {
    const regexpNumber = /[0-9]/;
    let inputCharacter = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !regexpNumber.test(inputCharacter)) {
      event.preventDefault();
    }
  }
}
