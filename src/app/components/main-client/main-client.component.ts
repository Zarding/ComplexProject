import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-main-client',
  templateUrl: './main-client.component.html',
  styleUrls: ['./main-client.component.css']
})
export class MainClientComponent {
  constructor(private titleService:Title, private route: ActivatedRoute, private router: Router){
    this.titleService.setTitle('Клиент - ' + this.route.snapshot.paramMap.get('name')!);
  }

  name!: number;

  ngOnInit(): void{
    this.name = +this.route.snapshot.paramMap.get('name')!;

    console.log(this.name);
  }
}
