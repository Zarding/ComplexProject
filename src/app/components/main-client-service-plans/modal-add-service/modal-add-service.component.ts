import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TypeService } from 'src/app/class/typeservice';
import { TypeServicesPlan } from 'src/app/class/typeservicesplan';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-modal-add-service',
  templateUrl: './modal-add-service.component.html',
  styleUrls: ['./modal-add-service.component.css']
})
export class ModalAddServiceComponent {
  typeservices! : TypeService[];
  typeservicesplan : TypeServicesPlan = new TypeServicesPlan();
  onAdd = new EventEmitter();

  constructor(private dialogRef: MatDialogRef<ModalAddServiceComponent>, public servServ : ServicesService) {}

  ngOnInit(): void {
    this.servServ.findAllTypeServices().subscribe(data => {
      this.typeservices = data;
      //this.reference.typeReference = data[0];
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onAddClick(): void {
    this.onAdd.emit(this.typeservicesplan);
    this.dialogRef.close();
  }
}
