import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalAddDocumentComponent } from '../add-client/modal-add-document/modal-add-document.component';
import { TypeServicesPlan } from 'src/app/class/typeservicesplan';
import { Services } from 'src/app/class/service';
import { Plan } from 'src/app/class/plan';

@Component({
  selector: 'app-serviceplan',
  templateUrl: './addserviceplan.component.html',
  styleUrls: ['./addserviceplan.component.css']
})

export class AddServiceplanComponent implements OnInit {
  constructor(private route: ActivatedRoute, public dialog: MatDialog){}

  displayedColumns: string[] = ['type', 'name', 'user', 'date', 'action'];
  dataSource : TypeServicesPlan[] = [];
  dataSoruce1 = new MatTableDataSource();
  plan : Plan = new Plan();

  ngAfterViewInit() {

  }
  name!: number;

  ngOnInit(): void{
    this.dataSoruce1.data = this.dataSource;
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
