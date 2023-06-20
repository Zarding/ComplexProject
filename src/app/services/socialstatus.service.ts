import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Socialstatus } from '../class/socialstatus';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialstatusService {

  private URL: string;

  constructor(private http: HttpClient) {
    this.URL = 'http://localhost:8082/socialstatuslist'
  }

  public findAll(): Observable<Socialstatus[]> {
    return this.http.get<Socialstatus[]>(this.URL);
  }
}
