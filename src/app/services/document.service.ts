import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TypeDocument } from '../class/typedocument';
import { Observable } from 'rxjs';
import { Document } from '../class/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private URL: string;

  constructor(private http: HttpClient) {
    this.URL = 'http://localhost:8082/typedocuments'
  }

  public findAllTypeDocuments(): Observable<TypeDocument[]> {
    return this.http.get<TypeDocument[]>(this.URL);
  }

  public save(document : Document) {
    return this.http.post<Document>('http://localhost:8082/adddocument', document);
  }

  public delDocument(document : Document) {
    return this.http.post<Document>('http://localhost:8082/deldocument', document);
  }
}
