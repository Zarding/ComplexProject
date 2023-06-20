import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ModalAddDocumentComponent } from '../add-client/modal-add-document/modal-add-document.component';
import { MatDialog } from '@angular/material/dialog';
import { ClientService } from 'src/app/services/client.service';
import { UserService } from 'src/app/services/user.service';
import { DocumentService } from 'src/app/services/document.service';

const Documents: Document[] = [];

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

  @ViewChild(MatSort) sort!: MatSort;

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
    })
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    let dialogRef = this.dialog.open(ModalAddDocumentComponent, {
      width: '500px',
      height: '460px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.componentInstance.onAdd.subscribe(document => {

      this.docServ.save(document);
      alert("ДОБАВЛЕНИЕ");   
    })
  }
}
