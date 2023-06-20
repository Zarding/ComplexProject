import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Client } from 'src/app/class/client';
import { ClientService } from 'src/app/services/client.service';
import { UserClient } from 'src/app/class/userclient';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main-client-information',
  templateUrl: './main-client-information.component.html',
  styleUrls: ['./main-client-information.component.css'],
})
export class MainClientInformationComponent implements OnInit {  
  id!: number;
  client? : Client;
  displayedColumns?: string[];
  dataSource! : UserClient[];

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {

  }

  constructor(private route: ActivatedRoute, private router: Router, private clientServ: ClientService, public userServ: UserService){

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
    })
    
  }
}
