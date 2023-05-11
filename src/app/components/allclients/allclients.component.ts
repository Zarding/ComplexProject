import { Component } from '@angular/core';
import {HumanService} from "../../../api/service/human-service.service";
import {Human} from "../../../api/model/Human";
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-allclients',
  templateUrl: './allclients.component.html',
  styleUrls: ['./allclients.component.css']
})
export class AllclientsComponent {
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
  constructor(private titleService:Title, private humService: HumanService) {
    this.titleService.setTitle("МКС");
  }
  ngOnInit(): void {
    this.humService.getHumans(this.page).subscribe((humant : Human[] ) =>this.humans = humant);
  }

    onScroll(): void {
    this.humService.getHumans(this.page++).subscribe((humant : Human[]) => this.humans = humant);
    
}

}
