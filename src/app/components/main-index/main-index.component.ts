import { Component } from '@angular/core';
import {HumanService} from "../../../api/service/human-service.service";
import {Human} from "../../../api/model/Human";
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-main-index',
  templateUrl: './main-index.component.html',
  styleUrls: ['./main-index.component.css']
})
export class MainIndexComponent {
  gridColumns = 5;
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
