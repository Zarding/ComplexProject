import { Socialstatus } from "./socialstatus";
import { UserClient } from "./userclient";

export class Client {
    id!:number;
    name?: string;
    secondname?: string;
    otchestvo?: string;
    sex?: string;
    dateOfBirth?: Date;
    placeOfBirth?: string;
    snils?: string;
    polisOms?: string;
    placeLastLive?: string;
    placeLastReg?: string;
    attribute?: string;
    idSocialStatus?: Socialstatus;
    userClients?: UserClient;
    photo?: string;
    documents?: Document[];
  }