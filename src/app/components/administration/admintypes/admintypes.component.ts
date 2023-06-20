import { Component, ViewChild } from '@angular/core';
import { ModalAddDocumentComponent } from '../../add-client/modal-add-document/modal-add-document.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { TypeDocument } from 'src/app/class/typedocument';
import { DocumentService } from 'src/app/services/document.service';
import { TypeReference } from 'src/app/class/typereference';
import { ReferencesService } from 'src/app/services/references.service';
import { TypeService } from 'src/app/class/typeservice';
import { AdminService } from 'src/app/services/admin.service';
import { SocialstatusService } from 'src/app/services/socialstatus.service';
import { Socialstatus } from 'src/app/class/socialstatus';

export interface PeriodicElement {
  id: number;
  name: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Паспорт'},
  {id: 1, name: 'Вод. удостоверение'},
  {id: 1, name: 'Права'},
  {id: 1, name: 'Паспорт'}
];

@Component({
  selector: 'app-admintypes',
  templateUrl: './admintypes.component.html',
  styleUrls: ['./admintypes.component.css']
})
export class AdmintypesComponent {
  constructor(private route: ActivatedRoute, public dialog: MatDialog, private docServ: DocumentService, private refServ: ReferencesService, private adminServ: AdminService, private ssServ: SocialstatusService){}

  displayedColumns: string[] = ['name', 'action'];

  dataSourceTypeDoc? : TypeDocument[];
  dataSourceTypeDoc1 = new MatTableDataSource();
  dataSourceTypeReference? : TypeReference[];
  dataSourceTypeReference1 = new MatTableDataSource();
  dataSourceTypeService? : TypeService[];
  dataSourceTypeService1 = new MatTableDataSource();
  dataSourceSocialStatuses? : Socialstatus[];
  dataSourceSocialStatuses1 = new MatTableDataSource();

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.docServ.findAllTypeDocuments().subscribe((data) => {
      this.dataSourceTypeDoc = data;
      this.dataSourceTypeDoc1.data = data;
    })
    this.refServ.findAllTypeReferences().subscribe((data) => {
      this.dataSourceTypeReference = data;
      this.dataSourceTypeReference1.data = data;
    })
    this.adminServ.findAllTypeServices().subscribe((data) => {
      this.dataSourceTypeService = data;
      this.dataSourceTypeService1.data = data;
    })
    this.ssServ.findAll().subscribe((data) => {
      this.dataSourceSocialStatuses = data;
      this.dataSourceSocialStatuses1.data = data;
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
