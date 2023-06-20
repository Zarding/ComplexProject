import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ModalAddDocumentComponent } from '../../add-client/modal-add-document/modal-add-document.component';
import { MatSort } from '@angular/material/sort';
import { Services } from 'src/app/class/service';
import { AdminService } from 'src/app/services/admin.service';

export interface PeriodicElement {
  id: number;
  type: string;
  name: string;
  about: string;
  price: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, type: 'Социальная', name: 'Отправка вещей', about: 'Платная', price: '3000.00'}
];
@Component({
  selector: 'app-adminservices',
  templateUrl: './adminservices.component.html',
  styleUrls: ['./adminservices.component.css']
})
export class AdminservicesComponent {
  constructor(private route: ActivatedRoute, public dialog: MatDialog, private adminServ: AdminService){}
  displayedColumns: string[] = ['type', 'name', 'about', 'price', 'action'];

  dataSource? : Services[];
  dataSoruce1 = new MatTableDataSource();

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {

  }

  name!: number;

  ngOnInit(): void{
    this.adminServ.findAllServices().subscribe(data => {
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
