import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalAddDocumentComponent } from '../add-client/modal-add-document/modal-add-document.component';
import { Plan } from 'src/app/class/plan';
import { ClientService } from 'src/app/services/client.service';
import { TypeServicesPlan } from 'src/app/class/typeservicesplan';
import { ModalAddServiceComponent } from '../main-client-service-plans/modal-add-service/modal-add-service.component';
import { UserService } from 'src/app/services/user.service';
import { ModalActionServiceComponent } from './modal-action-service/modal-action-service.component';
import { ModalViewServiceComponent } from './modal-view-service/modal-view-service.component';

@Component({
  selector: 'app-serviceplan',
  templateUrl: './serviceplan.component.html',
  styleUrls: ['./serviceplan.component.css']
})
export class ServiceplanComponent {
  constructor(private route: ActivatedRoute, public dialog: MatDialog, private clientServ: ClientService, public usServ: UserService){}

  displayedColumns: string[] = ['name', 'user', 'date', 'status', 'action'];
  dataSource! : TypeServicesPlan[];
  dataSoruce1 = new MatTableDataSource();
  plan? : Plan;

  ngAfterViewInit() {

  }
  id!: number;

  ngOnInit(): void{
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.clientServ.findServicesPlanById(this.id).subscribe((data) => {
      this.plan = data;
    })
    this.clientServ.findTypeServicesPlanByPlanId(this.id).subscribe((data) => {
      this.dataSource = data;
      this.dataSoruce1.data = data;
      this.dataSoruce1.connect();
    })
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    let dialogRef = this.dialog.open(ModalAddServiceComponent, {
      width: '500px',
      height: '560px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.componentInstance.onAdd.subscribe(typeservicesplan => {
      this.dataSource.push(typeservicesplan);
      this.dataSoruce1.data = this.dataSource;
      this.dataSoruce1.connect();
      //this.refServ.save(reference);
    })
  }

  openDialogAction(element: TypeServicesPlan, enterAnimationDuration: string, exitAnimationDuration: string): void {
    let dialogRef = this.dialog.open(ModalActionServiceComponent, {
      width: '500px',
      height: '560px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.componentInstance.typeservicesplan = element;
    dialogRef.componentInstance.onAdd.subscribe(typeservicesplan => {
      this.clientServ.findTypeServicesPlanByPlanId(this.id).subscribe((data) => {
        this.dataSource = data;
        this.dataSoruce1.data = data;
        this.dataSoruce1.connect();
      })
      //this.refServ.save(reference);
    })
  }

  openDialogView(element: TypeServicesPlan, enterAnimationDuration: string, exitAnimationDuration: string): void {
    let dialogRef = this.dialog.open(ModalViewServiceComponent, {
      width: '470px',
      height: '550px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.componentInstance.typeservicesplan = element;
  }
}
