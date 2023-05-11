import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ModalAddDocumentComponent } from '../add-client/modal-add-document/modal-add-document.component';
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', symbol: 'H'},
  {name: 'Helium', symbol: 'He'},
  {name: 'Lithium', symbol: 'Li'},
  {name: 'Beryllium', symbol: 'Be'},
];

@Component({
  selector: 'app-main-client-documents',
  templateUrl: './main-client-documents.component.html',
  styleUrls: ['./main-client-documents.component.css']
})
export class MainClientDocumentsComponent {
  constructor(private route: ActivatedRoute, public dialog: MatDialog){}
  displayedColumns: string[] = ['position', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  name!: number;

  ngOnInit(): void{
    this.name = +this.route.snapshot.paramMap.get('name')!;

    console.log(this.name);
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
