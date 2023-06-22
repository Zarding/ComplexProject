import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalAddDocumentComponent } from '../add-client/modal-add-document/modal-add-document.component';
import { TypeServicesPlan } from 'src/app/class/typeservicesplan';
import { Services } from 'src/app/class/service';
import { Plan } from 'src/app/class/plan';
import { ModalAddServiceComponent } from '../main-client-service-plans/modal-add-service/modal-add-service.component';
import { Client } from 'src/app/class/client';
import { ClientService } from 'src/app/services/client.service';
import { min } from 'rxjs';

@Component({
  selector: 'app-serviceplan',
  templateUrl: './addserviceplan.component.html',
  styleUrls: ['./addserviceplan.component.css']
})

export class AddServiceplanComponent implements OnInit {
  constructor(private route: ActivatedRoute, private location: Location, public dialog: MatDialog, private clientServ: ClientService){}

  displayedColumns: string[] = ['type', 'name', 'user', 'date', 'action'];
  dataSource : TypeServicesPlan[] = [];
  dataSoruce1 = new MatTableDataSource();
  plan : Plan = new Plan();
  id!: number;
  mindate?: string;

  ngAfterViewInit() {

  }

  ngOnInit(): void{
    this.dataSoruce1.data = this.dataSource;
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    })
    const date = new Date();
    date.setDate(date.getDate() + 1);
    this.mindate = date.toISOString().slice(0, 10);
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

  onSubmit() {
    this.plan.idClient = new Client();
    this.plan.idClient.id = this.id;
    for (let i = 0; i<this.dataSource.length; i++) {
      this.dataSource[i].idPlan = this.plan;
    }
    this.clientServ.addplan(this.dataSource).subscribe(
      () =>{
        this.gotoServicePlanList();
      }
    );
  }

  del(element: TypeServicesPlan) {
    this.dataSource.forEach( (item, index) => {
      if(item === element) this.dataSource.splice(index,1);
    });
    this.dataSoruce1.data = this.dataSource;
    this.dataSoruce1.connect();
  }

  setMinDate() {
    const date = new Date(this.plan.dateStart!);
    date.setDate(date.getDate() + 1);
    this.mindate = date.toISOString().slice(0, 10);
    //this.mindate?.setDate(this.plan.dateStart!.getDate() + 1);
    
  }

  gotoServicePlanList() {
    this.location.back();
  }
}
