import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from "@angular/platform-browser";
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/class/client';

@Component({
  selector: 'app-main-client',
  templateUrl: './main-client.component.html',
  styleUrls: ['./main-client.component.css']
})
export class MainClientComponent {
  constructor(private titleService:Title, private clientServ: ClientService, private route: ActivatedRoute, private router: Router){
    
  }

  public id = this.route.snapshot.paramMap.get('id');

  client!: Client;

  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];
  }
}
