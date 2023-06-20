import { Plan } from "./plan";
import { Services } from "./service";
import { User } from "./user";

export class TypeServicesPlan {
    id!:number;
    status?: string;
    summa?: number;
    dateComplete?: Date;
    factsumma?: number;
    annotation?: string;
    idPlan?: Plan;
    idServices?: Services;
    idUser?: User;
  }