import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ModalAddDocumentComponent } from '../add-client/modal-add-document/modal-add-document.component';
import { MatDialog } from '@angular/material/dialog';
import { ClientService } from 'src/app/services/client.service';
import { UserService } from 'src/app/services/user.service';
import { DocumentService } from 'src/app/services/document.service';
import { Document } from 'src/app/class/document';

@Component({
  selector: 'app-main-client-documents',
  templateUrl: './main-client-documents.component.html',
  styleUrls: ['./main-client-documents.component.css']
})
export class MainClientDocumentsComponent {
  constructor(private route: ActivatedRoute, public dialog: MatDialog, private clientServ: ClientService, public userServ: UserService, private docServ: DocumentService){}
  displayedColumns?: string[];
  

  id!: number;
  dataSource! : Document[];
  dataSoruce1 = new MatTableDataSource();

  ngAfterViewInit() {

  }

  name!: number;

  ngOnInit(): void{
    if (this.userServ.role == 1)
      this.displayedColumns = ['type', 'serial', 'number', 'organ', 'date', 'action'];
    else this.displayedColumns = ['type', 'serial', 'number', 'organ', 'date'];
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    })
    this.clientServ.findDocumentById(this.id).subscribe((data) => {
      this.dataSource = data;
      this.dataSoruce1.data = data;
      this.dataSoruce1.connect();
    })
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    let dialogRef = this.dialog.open(ModalAddDocumentComponent, {
      width: '500px',
      height: '460px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.componentInstance.data = this.id;

    dialogRef.componentInstance.onAdd.subscribe(document => {
      this.dataSource.push(document);
      this.dataSoruce1.data = this.dataSource;
      this.dataSoruce1.connect();
    })
  }

  del(element: Document) {
    this.docServ.delDocument(element).subscribe(() => {
      this.dataSource.forEach( (item, index) => {
        if(item === element) this.dataSource.splice(index,1);
      });
      this.dataSoruce1.data = this.dataSource;
      this.dataSoruce1.connect();
    });
  }
}
