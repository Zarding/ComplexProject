import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../class/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL: string;
  public authenticated = false;
  public role : Roles = Roles.NONE;
  response : any;

  constructor(private http: HttpClient, private router: Router) { 
    this.URL = 'http://localhost:8082/userslist';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.URL);
  }

  authenticate(user: User) {
    this.http.post('http://localhost:8082/login',user).subscribe(response => {
        this.response = response;

        if (this.response['auth']) {
            this.authenticated = true;
            this.role = this.response['role'];
            if (this.response['role'] == 'HEAD_USER')
            {
              this.role = Roles.HEAD_USER;
              this.router.navigate(['/clients/allclients']);
            }
            else if (this.response['role'] == 'USER')
            {
              this.role = Roles.USER;
              this.router.navigate(['/clients/calendar']);
            }
            else if (this.response['role'] == 'ADMIN')
            {
              this.role = Roles.ADMIN;
              this.router.navigate(['/administration/users']);
            }
            else this.role = Roles.NONE;
        } else {
            this.authenticated = false;
        }
    });
}

  public findWorkers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8082/userslist/workers');
  }
}

enum Roles {
  ADMIN,
  HEAD_USER,
  USER,
  NONE
}
