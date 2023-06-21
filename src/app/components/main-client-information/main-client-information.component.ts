import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { Client } from 'src/app/class/client';
import { ClientService } from 'src/app/services/client.service';
import { UserClient } from 'src/app/class/userclient';
import { UserService } from 'src/app/services/user.service';
import { ModalAddUserclientComponent } from './modal-add-userclient/modal-add-userclient.component';

@Component({
  selector: 'app-main-client-information',
  templateUrl: './main-client-information.component.html',
  styleUrls: ['./main-client-information.component.css'],
})
export class MainClientInformationComponent implements OnInit {  
  id!: number;
  client? : Client;
  displayedColumns?: string[];
  dataSource : UserClient[] = [];
  dataSoruce1 = new MatTableDataSource();

  ngAfterViewInit() {

  }

  constructor(private route: ActivatedRoute, public dialog: MatDialog, private router: Router, private clientServ: ClientService, public userServ: UserService){

  }

  ngOnInit(): void{
    if (this.userServ.role == 1)
    this.displayedColumns = ['position', 'symbol'];
    else this.displayedColumns = ['position'];
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    })
    this.clientServ.findById(this.id).subscribe((data) => {
      this.client = data;
    })
    this.clientServ.findUsersByClientId(this.id).subscribe((data) => {
      this.dataSource = data;
      this.dataSoruce1.data = data;
      this.dataSoruce1.connect();
    })
    
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    let dialogRef = this.dialog.open(ModalAddUserclientComponent, {
      width: '500px',
      height: '180px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.componentInstance.data = this.client;
    dialogRef.componentInstance.onAdd.subscribe(typeservicesplan => {
      this.dataSource.push(typeservicesplan);
      this.dataSoruce1.data = this.dataSource;
      this.dataSoruce1.connect();
      //this.refServ.save(reference);
    })
  }

  del(element: UserClient) {
    this.userServ.delUserClient(element).subscribe(() => {
      this.dataSource.forEach( (item, index) => {
        if(item === element) this.dataSource.splice(index,1);
      });
      this.dataSoruce1.data = this.dataSource;
      this.dataSoruce1.connect();
    });
  }
}
