import { Component, ViewChild } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ModalAddDocumentComponent } from './modal-add-document/modal-add-document.component';
import { MatDialog } from '@angular/material/dialog';
import { Client } from 'src/app/class/client';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';
import { Socialstatus } from 'src/app/class/socialstatus';
import { SocialstatusService } from 'src/app/services/socialstatus.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/class/user';
import { UserClient } from 'src/app/class/userclient';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {

  client: Client = new Client();
  id!: number;
  workers?: User[];
  worker? : User;
  usClient? : UserClient;
  selectedSex?: string;
  socialstatuses? : Socialstatus[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource : Document[] = [];
  dataSoruce1 = new MatTableDataSource();

  constructor(public dialog: MatDialog, public userServ: UserService, private clientServ: ClientService, private router: Router, private socialServ: SocialstatusService){}

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(ModalAddDocumentComponent) modal! : ModalAddDocumentComponent;

  ngAfterViewInit() {

  }

  ngOnInit() : void {
    this.usClient = new UserClient();
    this.socialServ.findAll().subscribe((data) => {
      this.socialstatuses = data;
      this.client.idSocialStatus = data[0];
    })
    this.userServ.findWorkers().subscribe((data) => {
      this.workers = data;
      this.worker = data[0];
    })
    this.client.sex = "Муж.";
    this.client.dateOfBirth = new Date();
    this.dataSoruce1.data = this.dataSource;
  }

  onSubmit() {
    this.client.documents = this.dataSource;
    this.usClient!.idUser = this.worker;
    this.client.userClients = this.usClient;
    this.clientServ.save(this.client, this.worker?.id!).subscribe(
      () =>{
        this.gotoUserList();
      }
    );

  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    let dialogRef = this.dialog.open(ModalAddDocumentComponent, {
      width: '500px',
      height: '460px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.componentInstance.onAdd.subscribe(document => {
      this.dataSource.push(document);
      this.dataSoruce1.data = this.dataSource;
      this.dataSoruce1.connect();
    })
  }

  gotoUserList() {
    if (this.userServ.role == 1)
      this.router.navigate(['/clients/allclients']);
      else this.router.navigate(['/clients/calendar']);
  }
}
