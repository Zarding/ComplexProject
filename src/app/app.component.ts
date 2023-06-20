import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Многофункциональный кабинет социального работника';
  hide=true;
  navigation?: string;


  constructor(private userService: UserService, private route: Router) {
    if (!this.userService.authenticated) this.route.navigate(['']);
    else {
      if (this.userService.role == 0)
        this.navigation = '/administration/users';
    }
  }

  logout() : void {
    this.userService.authenticated = false;
  }

  nextPage() : void {
    this.route.navigate(['/administration/users']);
  }
}
