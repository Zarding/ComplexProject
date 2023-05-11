import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface PeriodicElement {
  name: string;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', symbol: 'H'},
  {name: 'Helium', symbol: 'He'},
  {name: 'Lithium', symbol: 'Li'},
  {name: 'Beryllium', symbol: 'Be'},
];

@Component({
  selector: 'app-main-client-information',
  templateUrl: './main-client-information.component.html',
  styleUrls: ['./main-client-information.component.css']
})
export class MainClientInformationComponent {
  displayedColumns: string[] = ['position', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  constructor(private route: ActivatedRoute, private router: Router){}

  name!: number;

  ngOnInit(): void{
    this.name = +this.route.snapshot.paramMap.get('name')!;

    console.log(this.name);
  }
}
