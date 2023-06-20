import { Client } from "./client";
import { TypeDocument } from "./typedocument";

export class Document {
    id!:number;
    number?: string;
    serial?: string;
    date?: Date;
    organ?: string;
    idTypeDocument?: TypeDocument;
    idClient?: Client;
  }