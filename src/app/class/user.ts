import { Role } from "./role";

export class User {
    id!:number;
    login?: string;
    password?: string;
    idRole?: Role;
  }