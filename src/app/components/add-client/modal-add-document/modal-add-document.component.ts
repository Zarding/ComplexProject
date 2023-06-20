import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
    this.dialogRef.close();
  }
}
