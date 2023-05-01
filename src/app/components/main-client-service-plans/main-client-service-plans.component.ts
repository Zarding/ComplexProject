import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-client-service-plans',
  templateUrl: './main-client-service-plans.component.html',
  styleUrls: ['./main-client-service-plans.component.css']
})
export class MainClientServicePlansComponent {
  constructor(private route: ActivatedRoute, private router: Router){}

  name!: number;

  ngOnInit(): void{
    this.name = +this.route.snapshot.paramMap.get('name')!;

    console.log(this.name);
  }
  
  columnDefs = [{ field: "имя", width: 90 }];

  rowData = [
    { имя: "Toyota" },
    { имя: "Ford" },
    { имя: "Porsche" }
  ];
}
