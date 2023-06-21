import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TypeDocument } from '../class/typedocument';
import { Observable } from 'rxjs';
import { TypeService } from '../class/typeservice';
import { Services } from '../class/service';
import { TypeServicesPlan } from '../class/typeservicesplan';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private URL: string;

  constructor(private http: HttpClient) {
    this.URL = 'http://localhost:8082/typeservices'
  }

  public findAllTypeServices(): Observable<TypeService[]> {
    return this.http.get<TypeService[]>(this.URL);
  }

  public findAllServicesByIdTypeServices(id : number): Observable<Services[]> {
    return this.http.get<Services[]>('http://localhost:8082/services/' + id);
  }

  public updateTypeServicesPlan(tsp : TypeServicesPlan) {
    return this.http.post<TypeServicesPlan>('http://localhost:8082/services/update', tsp);
  }
}
