import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Client } from 'src/app/class/client';
import { Plan } from 'src/app/class/plan';
import { Services } from 'src/app/class/service';
import { TypeService } from 'src/app/class/typeservice';
import { TypeServicesPlan } from 'src/app/class/typeservicesplan';
import { User } from 'src/app/class/user';
import { ClientService } from 'src/app/services/client.service';
import { ServicesService } from 'src/app/services/services.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-modal-add-service',
  templateUrl: './modal-add-service.component.html',
  styleUrls: ['./modal-add-service.component.css']
})
export class ModalAddServiceComponent {
  add : boolean = false;
  idclient!: number;
  typeservices! : TypeService[];
  selectedtypeservices? : TypeService;
  services! : Services[];
  users? : User[];
  plan!: Plan;
  typeservicesplan : TypeServicesPlan = new TypeServicesPlan();
  onAdd = new EventEmitter();

  constructor(private dialogRef: MatDialogRef<ModalAddServiceComponent>, private usServ: UserService, public servServ : ServicesService, private clientServ: ClientService) {}

  ngOnInit(): void {
    this.typeservicesplan.idServices = new Services();
    this.typeservicesplan.idUser = this.usServ.user;
    this.usServ.findWorkersByClient(this.idclient).subscribe((data) => {
      this.users = data;
      this.typeservicesplan.idUser = data[0];
    })
    this.servServ.findAllTypeServices().subscribe(data => {
      this.typeservices = data;
      this.selectedtypeservices = data[0];
      this.servServ.findAllServicesByIdTypeServices(data[0].id).subscribe(data1 => {
        this.services = data1;
        this.typeservicesplan.idServices = data1[0];
        this.typeservicesplan.idServices.idTypeServices = data[0];
      })
      //this.reference.typeReference = data[0];
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onAddClick(): void {
    this.onAdd.emit(this.typeservicesplan);
    if (this.add) {
      this.typeservicesplan.status = 'Новый';
      this.typeservicesplan.idPlan = this.plan;
      this.clientServ.addtypeservicesplan(this.typeservicesplan).subscribe(() => {
        this.dialogRef.close();
      });
    }
    else this.dialogRef.close();
  }
  onChange(): void {
    this.servServ.findAllServicesByIdTypeServices(this.selectedtypeservices!.id).subscribe(data1 => {
      this.services = data1;
      this.typeservicesplan.idServices = data1[0];
      this.typeservicesplan.idServices.idTypeServices = this.selectedtypeservices;
    })
  }
}
