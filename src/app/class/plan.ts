import { Client } from "./client";

export class Plan {
    id!:number;
    number?: string;
    idClient?: Client;
    dateStart?: Date;
    dateFinish?: Date;
    status?: string;
    count_services?: number;
  }