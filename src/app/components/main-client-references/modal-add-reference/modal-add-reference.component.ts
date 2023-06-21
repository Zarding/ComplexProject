import { Component, EventEmitter, OnInit } from '@angular/core';
import { Reference } from 'src/app/class/reference';
import { TypeReference } from 'src/app/class/typereference';
import { MatDialogRef } from '@angular/material/dialog';
import { ReferencesService } from 'src/app/services/references.service';
import { Client } from 'src/app/class/client';
import { UserService } from 'src/app/services/user.service';
import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-modal-add-reference',
  templateUrl: './modal-add-reference.component.html',
  styleUrls: ['./modal-add-reference.component.css']
})
export class ModalAddReferenceComponent {
  typereferences! : TypeReference[];
  reference : Reference = new Reference();
  onAdd = new EventEmitter();
  data?: number;

  constructor(private dialogRef: MatDialogRef<ModalAddReferenceComponent>, public refServ : ReferencesService, private usServ: UserService, private clientServ: ClientService) {}

  ngOnInit(): void {
    this.refServ.findAllTypeReferences().subscribe(data => {
      this.typereferences = data;
      this.reference.typeReference = data[0];
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onAddClick(): void {
    this.onAdd.emit(this.reference);
    this.reference.idUser = this.usServ.user;
    this.reference.idClient = new Client();
    this.reference.idClient.id = this.data!;
    this.refServ.save(this.reference).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
