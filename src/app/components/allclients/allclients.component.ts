import { Component, OnInit } from '@angular/core';
import {HumanService} from "../../../api/service/human-service.service";
import {Human} from "../../../api/model/Human";
import { Title } from "@angular/platform-browser";
import { Client } from 'src/app/class/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-allclients',
  templateUrl: './allclients.component.html',
  styleUrls: ['./allclients.component.css']
})
export class AllclientsComponent implements OnInit {
  isShowDiv = true;
  clients? : Client[];
  component: HTMLElement | undefined;
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
    this.component = document.querySelector('#myComponent') as HTMLInputElement;
    if(this.isShowDiv)
      this.component.style.display = 'inherit';
      else this.component.style.display = 'none';
  }
  gridColumns = 4;
  page = 1;
  humans: Human[] =[ ];
  constructor(private titleService:Title, public clientServ: ClientService) {
    this.titleService.setTitle("МКС");
  }
  ngOnInit(): void {
    this.clientServ.findAll().subscribe(data => {
      this.clients = data;
    });
  }

    onScroll(): void {
    //this.humService.getHumans(this.page++).subscribe((humant : Human[]) => this.humans = humant);
    
}

}
