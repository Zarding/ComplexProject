import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalAddDocumentComponent } from '../add-client/modal-add-document/modal-add-document.component';
import { ClientService } from 'src/app/services/client.service';
import { Plan } from 'src/app/class/plan';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main-client-service-plans',
  templateUrl: './main-client-service-plans.component.html',
  styleUrls: ['./main-client-service-plans.component.css']
})
export class MainClientServicePlansComponent implements OnInit {
  constructor(private route: ActivatedRoute, public dialog: MatDialog, private clientServ: ClientService, public userServ: UserService){}
  displayedColumns: string[] = ['id', 'date_start', 'date_finish', 'count_service', 'status'];
  dataSource! : Plan[];
  id!: number;
  count_services!: number;

  ngAfterViewInit() {

  }

  ngOnInit(): void{
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    })
    this.clientServ.findServicesPlansById(this.id).subscribe((data) => {
      this.dataSource = data;
    })
  }
}
