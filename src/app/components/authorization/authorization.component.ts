import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { Role } from 'src/app/class/role';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  
  user : User = new User();
  users? : User[];

  password: string = "";

  hide = true;

  constructor(public userServ: UserService, private router: Router){
  }

  ngOnInit() :void {
    this.userServ.findAll().subscribe(data => {
      this.users = data;
      this.user = data[0];
    });
  }

  login(){
    this.user.password = this.password;
     this.userServ.authenticate(this.user);
     //this.user.login = "";
     this.password = "";
  }
}
