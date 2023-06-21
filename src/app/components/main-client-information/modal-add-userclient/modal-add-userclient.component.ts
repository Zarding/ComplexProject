import { Component, EventEmitter, OnInit } from '@angular/core';
import { UserClient } from 'src/app/class/userclient';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { ClientService } from 'src/app/services/client.service';
import { User } from 'src/app/class/user';
import { Client } from 'src/app/class/client';

@Component({
  selector: 'app-modal-add-userclient',
  templateUrl: './modal-add-userclient.component.html',
  styleUrls: ['./modal-add-userclient.component.css']
})
export class ModalAddUserclientComponent {
  onAdd = new EventEmitter();
  data?: Client;
  userclient: UserClient = new UserClient();
  workers?: User[];

  constructor(private dialogRef: MatDialogRef<ModalAddUserclientComponent>, public usServ: UserService, private clientServ: ClientService) {}

  ngOnInit(): void {
    this.usServ.findWorkers().subscribe((data) => {
      this.workers = data;
      this.userclient.idUser = data[0];
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onAddClick(): void {
    this.onAdd.emit(this.userclient);
    this.userclient.idClient = this.data;
    this.usServ.addUserClient(this.userclient).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
