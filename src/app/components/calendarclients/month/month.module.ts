import {DataService} from "./data.service";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {DayPilotModule} from "daypilot-pro-angular";
import { MonthComponent } from "./month.component";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from '@angular/router';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DayPilotModule,
    RouterModule
  ],
  declarations: [
    MonthComponent
  ],
  exports:      [ MonthComponent ],
  providers:    [ DataService ]
})
export class MonthModule { }
