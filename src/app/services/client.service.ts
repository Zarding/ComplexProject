import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../class/client';
import { Reference } from '../class/reference';
import { TypeServicesPlan } from '../class/typeservicesplan';
import { Plan } from '../class/plan';
import { UserClient } from '../class/userclient';
import { Socialstatus } from '../class/socialstatus';
import { User } from '../class/user';
import { Document } from '../class/document';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private URL: string;
  public authenticated = false;
  response : any;

  constructor(private http: HttpClient) { 
    this.URL = 'http://localhost:8082/clientslist'
  }

  public findAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.URL);
  }

  public findAllClientsById(iduser: number): Observable<Client[]> {
    return this.http.get<Client[]>('http://localhost:8082/clientslist/' + iduser);
  }

  public findAllFilter(socialstatus: Socialstatus, secondname: string): Observable<Client[]> {
    return this.http.get<Client[]>(this.URL);
  }

  public findById(id : number): Observable<Client> {
    return this.http.get<Client>('http://localhost:8082/client/' + id);
  }

  public findUsersByClientId(id : number): Observable<UserClient[]> {
    return this.http.get<UserClient[]>('http://localhost:8082/clientusers/' + id);
  }

  public findDocumentById(id : number): Observable<Document[]> {
    return this.http.get<Document[]>('http://localhost:8082/documents/' + id);
  }

  public findReferenceById(id : number): Observable<Reference[]> {
    return this.http.get<Reference[]>('http://localhost:8082/references/' + id);
  }

  public findServicesPlansById(id : number): Observable<Plan[]> {
    return this.http.get<Plan[]>('http://localhost:8082/servicesplans/' + id);
  }

  public findServicesPlanById(id : number): Observable<Plan> {
    return this.http.get<Plan>('http://localhost:8082/serviceplan/' + id);
  }

  public findTypeServicesPlanByPlanId(id : number): Observable<TypeServicesPlan[]> {
    return this.http.get<TypeServicesPlan[]>('http://localhost:8082/typeserviceplan/' + id);
  }

  public save(client : Client, id: number, file: File) {
    //this.UploadFile(file);
    return this.http.post<Client>('http://localhost:8082/addclient/' + id, client);
  }

  public addplan(tsp: TypeServicesPlan[]) {
    return this.http.post<TypeServicesPlan[]>('http://localhost:8082/addplan', tsp);
  }

  public addtypeservicesplan(tsp: TypeServicesPlan) {
    return this.http.post<TypeServicesPlan>('http://localhost:8082/addtypeservicesplan', tsp);
  }

  public UploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post('http://localhost:8082/upload', formData);
  }
}
