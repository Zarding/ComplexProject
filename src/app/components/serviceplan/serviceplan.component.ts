import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalAddDocumentComponent } from '../add-client/modal-add-document/modal-add-document.component';
import { Plan } from 'src/app/class/plan';
import { ClientService } from 'src/app/services/client.service';
import { TypeServicesPlan } from 'src/app/class/typeservicesplan';

@Component({
  selector: 'app-serviceplan',
  templateUrl: './serviceplan.component.html',
  styleUrls: ['./serviceplan.component.css']
})
export class ServiceplanComponent {
  constructor(private route: ActivatedRoute, public dialog: MatDialog, private clientServ: ClientService){}

  displayedColumns: string[] = ['id', 'name', 'user', 'date', 'status', 'action'];
  dataSource! : TypeServicesPlan[];
  plan? : Plan;

  @ViewChild(MatSort) sort!: MatSort;

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
    })
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ModalAddDocumentComponent, {
      width: '500px',
      height: '460px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
