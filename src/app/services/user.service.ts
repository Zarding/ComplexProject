import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../class/user';
import { Router } from '@angular/router';
import { UserClient } from '../class/userclient';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL: string;
  public authenticated = false;
  public role : Roles = Roles.NONE;
  user : User = new User();
  response : any;

  constructor(private http: HttpClient, private router: Router) { 
    this.URL = 'http://localhost:8082/userslist';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.URL);
  }

  public addUserClient(userclient: UserClient) {
    return this.http.post<UserClient>('http://localhost:8082/adduserclient', userclient);
  }

  public delUserClient(userclient: UserClient) {
    return this.http.post<UserClient>('http://localhost:8082/deluserclient', userclient);
  }

  authenticate(user: User) {
    this.http.post('http://localhost:8082/login',user).subscribe(response => {
        this.response = response;

        if (this.response['auth']) {
          this.user.id = this.response['id'];
          this.user.login = this.response['login'];
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
            alert('Вы ввели неверный пароль');
        }
    });
}

  public findWorkers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8082/userslist/workers');
  }

  public findWorkersByClient(id: number): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8082/userslist/workersclient/' + id);
  }
}

enum Roles {
  ADMIN,
  HEAD_USER,
  USER,
  NONE
}
