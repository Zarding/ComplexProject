import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Client } from 'src/app/class/client';
import { Document } from 'src/app/class/document';
import { TypeDocument } from 'src/app/class/typedocument';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-modal-add-document',
  templateUrl: './modal-add-document.component.html',
  styleUrls: ['./modal-add-document.component.css']
})
export class ModalAddDocumentComponent implements OnInit {
  typedocuments! : TypeDocument[];
  document : Document = new Document();
  onAdd = new EventEmitter();
  data?: number;

  constructor(private dialogRef: MatDialogRef<ModalAddDocumentComponent>, public docServ : DocumentService) {}
  ngOnInit(): void {
    this.docServ.findAllTypeDocuments().subscribe(data => {
      this.typedocuments = data;
      this.document.idTypeDocument = data[0];
    });
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  onAddClick(): void {
    this.onAdd.emit(this.document);
    if (this.data == undefined)
    {
      this.dialogRef.close();
    }
    else
    {
    this.document.idClient = new Client();
    this.document.idClient.id = this.data!;
    this.docServ.save(this.document).subscribe(() => {
      this.dialogRef.close();
    });
  }    
  }
  onKeyPress(event: any) {
    const regexpNumber = /[0-9]/;
    let inputCharacter = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !regexpNumber.test(inputCharacter)) {
      event.preventDefault();
    }
  }
}
