import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-client-references',
  templateUrl: './main-client-references.component.html',
  styleUrls: ['./main-client-references.component.css']
})
export class MainClientReferencesComponent {

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
