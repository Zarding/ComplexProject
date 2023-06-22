import { Component, OnInit } from '@angular/core';
import {HumanService} from "../../../api/service/human-service.service";
import {Human} from "../../../api/model/Human";
import { Title } from "@angular/platform-browser";
import { Client } from 'src/app/class/client';
import { ClientService } from 'src/app/services/client.service';
import { Socialstatus } from 'src/app/class/socialstatus';
import { SocialstatusService } from 'src/app/services/socialstatus.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-allclients',
  templateUrl: './allclients.component.html',
  styleUrls: ['./allclients.component.css']
})
export class AllclientsComponent implements OnInit {
  isShowDiv = true;
  clients? : Client[];
  component: HTMLElement | undefined;
  filterSocialStatus? : Socialstatus;
  filterSecondName? : string;
  socialstatuses? : Socialstatus[];
  socialstatusnull : Socialstatus = new Socialstatus();

  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
    this.component = document.querySelector('#myComponent') as HTMLInputElement;
    if(this.isShowDiv)
      this.component.style.display = 'inherit';
      else this.component.style.display = 'none';
  }
  gridColumns = 4;
  page = 1;
  constructor(private titleService:Title, public clientServ: ClientService, private socialServ: SocialstatusService, private usServ: UserService) {
    this.titleService.setTitle("МКС");
  }
  ngOnInit(): void {
    if (this.usServ.role == 2) {
      this.clientServ.findAllClientsById(this.usServ.user.id).subscribe(data => {
        this.clients = data;
      });
    }
    else
    {
    this.clientServ.findAll().subscribe(data => {
      this.clients = data;
    });
  }
    this.socialServ.findAll().subscribe((data) => {
      this.socialstatuses = data;
      this.socialstatusnull.id = 0;
      this.socialstatusnull.name = "-";
      this.socialstatuses.unshift(this.socialstatusnull)
      this.filterSocialStatus = this.socialstatuses[0];
    })
  }

  clickFilter() {
      // this.newclient.id = 55;
      // this.newclient.secondname = 'abramovich';
      // this.newclient.name = 'new';
      // this.clients?.push(this.newclient);
      if (this.filterSocialStatus?.id != 0 && (this.filterSecondName != undefined || this.filterSecondName != ''))
      {
        this.clients = this.clients?.filter(client => client.idSocialStatus?.id == this.filterSocialStatus?.id && client.secondname?.toLowerCase().includes(this.filterSecondName!.toLowerCase()));
      }
      else if (this.filterSecondName == undefined || this.filterSecondName == '')
        this.clients = this.clients?.filter(client => client.idSocialStatus?.id == this.filterSocialStatus?.id);
      else 
        this.clients = this.clients?.filter(client => client.secondname?.toLowerCase().includes(this.filterSecondName!.toLowerCase()));
  }

  cancelFilter() {
    if (this.usServ.role == 2) {
      this.clientServ.findAllClientsById(this.usServ.user.id).subscribe(data => {
        this.clients = data;
      });
    }
    else
    {
    this.clientServ.findAll().subscribe(data => {
      this.clients = data;
    });
  }
  }

    onScroll(): void {
    //this.humService.getHumans(this.page++).subscribe((humant : Human[]) => this.humans = humant);
    
}

}
