import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DataService } from './calendar/data.service';
import { TypeServicesPlan } from 'src/app/class/typeservicesplan';

@Component({
  selector: 'app-calendarclients',
  templateUrl: './calendarclients.component.html',
  styleUrls: ['./calendarclients.component.css']
})
export class CalendarclientsComponent implements OnInit {
  clients? : TypeServicesPlan[];

  constructor(public calendarServ: DataService) {

  }

  ngOnInit(): void {

  }

}