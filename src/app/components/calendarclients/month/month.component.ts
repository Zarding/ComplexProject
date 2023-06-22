import {Component, ViewChild, AfterViewInit, OnInit} from "@angular/core";
import {DayPilot, DayPilotMonthComponent} from "daypilot-pro-angular";
import { DayPilotNavigatorComponent } from "daypilot-pro-angular";
import {DataService} from "./data.service";
import { TypeServicesPlan } from "src/app/class/typeservicesplan";
import { EventCalendar } from "src/app/class/event";
import { Client } from "src/app/class/client";

@Component({
  selector: 'month-component',
  template: `
      <div class="container">
        <div class="flex gap-1 mb-2">
          <button (click)="navigatePrevious()" class="bg-green-200 hover:bg-green-400 text-white px-2 rounded-l-xl"> << </button>
          <button (click)="navigateToday()" class="bg-green-200 hover:bg-green-400 text-white px-2"> Текущая неделя </button>
          <button (click)="navigateNext()" class="bg-green-200 hover:bg-green-400 text-white px-2 rounded-r-xl"> >> </button>
        </div>
        <div class="content">
            <daypilot-month [config]="config" [events]="events" #month></daypilot-month>
        </div>
      </div>
      <div class="component" id="clientInformation" [style.opacity]="0">
        <div>
            <div class="h-full">
              <div class="flex gap-2">
                <label for="fName" class="label">Основная информация</label>
                <a class="label" routerLink="../{{client.id}}/serviceplan/{{selectedserviceplan.id}}" [queryParams]="{id: client.id}">Открыть сервисный план</a>
              </div>

                <div class="w-full">
                    <div class="mb-5">
                        <label for="fName" class="label">ФИО</label>
                        <input
                            type="text"
                            name="fName"
                            id="fName"
                            class="input-text"
                            [(ngModel)]="client.name + ' ' + client.secondname + ' ' + client.otchestvo"
                            [disabled]="true"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `,
  styles: [`
  .content {
    
  }
  
  .container {
    @apply py-[10px] bg-white shadow-xl rounded-2xl px-[10px] mx-[5px] transition-all
  }

  .component {
  @apply my-[10px] bg-white shadow-xl rounded-2xl px-[10px] mx-[5px] transition-all
}

.label {
    @apply mb-1 block text-base font-medium text-[#07074D]
}
.input-text {
    @apply w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-green-500 focus:shadow-md
}
  
  `]
})
export class MonthComponent implements AfterViewInit, OnInit {

  @ViewChild("month") month!: DayPilotMonthComponent;
  @ViewChild("navigator") nav!: DayPilotNavigatorComponent;

  date = DayPilot.Date.today();

  client : Client = {id: 0};
  selectedserviceplan : TypeServicesPlan = new TypeServicesPlan();

  events: any[] = [];

  typeservicesplans!: TypeServicesPlan[];

  configNavigator: DayPilot.NavigatorConfig = {
    showMonths: 1,
    locale: "ru-ru",
    cellWidth: 25,
    cellHeight: 25,
    selectMode: "Month",
    onVisibleRangeChanged: args => {
      this.loadEvents();
    }
  };

  config: DayPilot.MonthConfig = {
    startDate: this.date,
    locale: "ru-ru",
    viewType: "Month",
    showWeekend: true,
    timeRangeSelectedHandling: "Disabled",
    eventDeleteHandling: "Disabled",
    eventMoveHandling: "Disabled",
    eventResizeHandling: "Disabled",
    eventClickHandling: "Select",
    onEventSelected: (args) => {
      this.selectedserviceplan = args.e.data;
      this.client.id = this.typeservicesplans.find(i => i.id == args.e.data.id)!.idPlan!.idClient!.id;
      this.client.name = this.typeservicesplans.find(i => i.id == args.e.data.id)!.idPlan!.idClient?.name;
      this.client.secondname = this.typeservicesplans.find(i => i.id == args.e.data.id)!.idPlan!.idClient?.secondname;
      this.client.otchestvo = this.typeservicesplans.find(i => i.id == args.e.data.id)!.idPlan!.idClient?.otchestvo;
      document.getElementById("clientInformation")!.style.opacity = "1";
    },
    eventHoverHandling: "Disabled",
  };

  constructor(private ds: DataService) {
  }

  openClient() {
    
  }

  ngAfterViewInit(): void {
    const from = this.month.control.visibleStart();
    const to = this.month.control.visibleEnd();
    this.ds.findAll().subscribe(result => {
      this.typeservicesplans = result;
      console.log(result);
      console.log(result[3].idPlan?.idClient?.id);
      for(let i = 0; i<this.typeservicesplans.length; i++) {
        this.events.push(new EventCalendar(
          this.typeservicesplans[i].id!,
          new Date(this.typeservicesplans[i].dateComplete!),
          new Date(this.typeservicesplans[i].dateComplete!),
          this.typeservicesplans[i].idServices?.name!
          ));
      };
    });
    //document.getElementById("clientInformation")
    // this.ds.getEvents(from, to).subscribe(result => {
    //   this.events = result;
    //   console.log(result);
    // });
  }

  ngOnInit(): void {

  }

  loadEvents(): void {
    const from = this.nav.control.visibleStart();
    const to = this.nav.control.visibleEnd();
    // this.ds.getEvents(from, to).subscribe(result => {
    //   this.events = result;
    // });
  }

  changeDate(date: DayPilot.Date): void {
    this.config.startDate = date;
  }

  navigatePrevious(): void {
    this.config.startDate = (this.config.startDate as DayPilot.Date).addDays(-30);
  }

  navigateNext(): void {
    this.config.startDate = (this.config.startDate as DayPilot.Date).addDays(30);
  }

  navigateToday(): void {
    this.config.startDate = DayPilot.Date.today();
  }

}

