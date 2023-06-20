import { Client } from "./client";
import { TypeReference } from "./typereference";
import { User } from "./user";

export class Reference {
    id?:number;
    typeReference?: TypeReference;
    date?: Date;
    content?: string;
    idClient?: Client;
    idUser?: User;
  }