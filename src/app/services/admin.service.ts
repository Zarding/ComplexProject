import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../class/user';
import { Services } from '../class/service';
import { TypeDocument } from '../class/typedocument';
import { TypeReference } from '../class/typereference';
import { TypeService } from '../class/typeservice';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private URL: string;
  public authenticated = false;
  response : any;

  constructor(private http: HttpClient) { 
    this.URL = 'http://localhost:8082/admin'
  }

  public findAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.URL + "/users");
  }

  public findAllServices(): Observable<Services[]> {
    return this.http.get<Services[]>(this.URL + "/services");
  }

  public findAllTypeServices(): Observable<TypeService[]> {
    return this.http.get<TypeService[]>('http://localhost:8082/typeservices');
  }
}
