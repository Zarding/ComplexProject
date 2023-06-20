import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TypeDocument } from '../class/typedocument';
import { Observable } from 'rxjs';
import { TypeService } from '../class/typeservice';

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
}
