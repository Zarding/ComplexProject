import { Component, ViewChild } from '@angular/core';
import {HumanService} from "../../../api/service/human-service.service";
import {Human} from "../../../api/model/Human";
import { Title } from "@angular/platform-browser";
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-index',
  templateUrl: './main-index.component.html',
  styleUrls: ['./main-index.component.css']
})
export class MainIndexComponent {
  isShowDiv = false;
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
  constructor(private titleService:Title, public userServ: UserService, private route: Router) {
    this.titleService.setTitle("МКС");
  }

  ngOnInit() : void {
    
  }
}
