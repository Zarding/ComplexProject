import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ModalAddDocumentComponent } from '../../add-client/modal-add-document/modal-add-document.component';
import { MatSort } from '@angular/material/sort';
import { AdminService } from 'src/app/services/admin.service';
import { User } from 'src/app/class/user';

export interface PeriodicElement {
  id: number;
  user: string;
  role: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, user: 'Работник', role: 'Социальный работник'}
];

@Component({
  selector: 'app-adminusers',
  templateUrl: './adminusers.component.html',
  styleUrls: ['./adminusers.component.css']
})
export class AdminusersComponent {
  constructor(private route: ActivatedRoute, public dialog: MatDialog, private adminServ: AdminService){}
  displayedColumns: string[] = ['user', 'role', 'action'];

  dataSource? : User[];
  dataSoruce1 = new MatTableDataSource();

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {

  }

  name!: number;

  ngOnInit(): void{
    this.adminServ.findAllUsers().subscribe(data => {
      this.dataSource = data;
      this.dataSoruce1.data = data;
    });
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
