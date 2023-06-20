import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reference } from '../class/reference';
import { TypeReference } from '../class/typereference';

@Injectable({
  providedIn: 'root'
})
export class ReferencesService {

  private URL: string;

  constructor(private http: HttpClient) {
    this.URL = 'http://localhost:8082/reference'
  }

  public findAllReferences(): Observable<Reference[]> {
    return this.http.get<Reference[]>(this.URL);
  }

  public findAllTypeReferences(): Observable<TypeReference[]> {
    return this.http.get<TypeReference[]>('http://localhost:8082/typereferences');
  }

  public save(reference : Reference) {
    return this.http.post<Reference>('http://localhost:8082/addreference', reference);
  }
}
