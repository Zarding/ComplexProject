import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalAddDocumentComponent } from '../add-client/modal-add-document/modal-add-document.component';
import { Reference } from 'src/app/class/reference';
import { ClientService } from 'src/app/services/client.service';
import { UserService } from 'src/app/services/user.service';
import { ModalAddReferenceComponent } from './modal-add-reference/modal-add-reference.component';
import { ReferencesService } from 'src/app/services/references.service';

const References: Reference[] = [];

@Component({
  selector: 'app-main-client-references',
  templateUrl: './main-client-references.component.html',
  styleUrls: ['./main-client-references.component.css']
})
export class MainClientReferencesComponent {

  constructor(private route: ActivatedRoute, public dialog: MatDialog, private refServ: ReferencesService, private clientServ: ClientService, private userServ: UserService){}
  displayedColumns?: string[];
  dataSource : Reference[] = [];
  dataSoruce1 = new MatTableDataSource();
  id!: number;

  ngAfterViewInit() {

  }

  ngOnInit(): void{
    if (this.userServ.role == 2)
    this.displayedColumns = ['type', 'content', 'date', 'who_give'];
    else this.displayedColumns = ['type', 'content', 'date', 'who_give', 'action'];
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    })
    this.clientServ.findReferenceById(this.id).subscribe((data) => {
      this.dataSource = data;
      this.dataSoruce1.data = data;
      this.dataSoruce1.connect();
    })
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    let dialogRef = this.dialog.open(ModalAddReferenceComponent, {
      width: '500px',
      height: '370px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.componentInstance.data = this.id;

    dialogRef.componentInstance.onAdd.subscribe(reference => {
      this.dataSource.push(reference);
      this.dataSoruce1.data = this.dataSource;
      this.dataSoruce1.connect();
    })
  }

  del(element: Reference) {
    this.refServ.delReference(element).subscribe(() => {
      this.dataSource.forEach( (item, index) => {
        if(item === element) this.dataSource.splice(index,1);
      });
      this.dataSoruce1.data = this.dataSource;
      this.dataSoruce1.connect();
    });
  }
}
