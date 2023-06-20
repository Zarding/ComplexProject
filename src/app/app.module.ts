import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {FlexLayoutModule} from "@angular/flex-layout";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {CdkVirtualScrollableElement} from "@angular/cdk/scrolling";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule } from './components/calendarclients/calendar/calendar.module';
import { MonthModule } from './components/calendarclients/month/month.module';
import { MainIndexComponent } from './components/main-index/main-index.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { AgGridModule } from 'ag-grid-angular';

import { MainClientComponent } from './components/main-client/main-client.component';
import { MainClientInformationComponent } from './components/main-client-information/main-client-information.component';
import { MainClientDocumentsComponent } from './components/main-client-documents/main-client-documents.component';
import { MainClientServicePlansComponent } from './components/main-client-service-plans/main-client-service-plans.component';
import { MainClientReferencesComponent } from './components/main-client-references/main-client-references.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';

import {MaterialExampleModule} from '../material.module';
import { ModalAddDocumentComponent } from './components/add-client/modal-add-document/modal-add-document.component';
import { AllclientsComponent } from './components/allclients/allclients.component';
import { CalendarclientsComponent } from './components/calendarclients/calendarclients.component';
//import { MonthComponent } from './components/calendarclients/month/month.component';
import { AddServiceplanComponent } from './components/addserviceplan/addserviceplan.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { AdminusersComponent } from './components/administration/adminusers/adminusers.component';
import { AdmintypesComponent } from './components/administration/admintypes/admintypes.component';
import { AdminservicesComponent } from './components/administration/adminservices/adminservices.component';
import { ServiceplanComponent } from './components/serviceplan/serviceplan.component';
import { ModalAddReferenceComponent } from './components/main-client-references/modal-add-reference/modal-add-reference.component';
import { ModalAddServiceComponent } from './components/main-client-service-plans/modal-add-service/modal-add-service.component';

@NgModule({
  declarations: [
    AppComponent,
    MainIndexComponent,
    AddClientComponent,
    MainClientComponent,
    MainClientInformationComponent,
    MainClientDocumentsComponent,
    MainClientServicePlansComponent,
    MainClientReferencesComponent,
    AuthorizationComponent,
    ModalAddDocumentComponent,
    AllclientsComponent,
    CalendarclientsComponent,
    //MonthComponent,
    AddServiceplanComponent,
    AdministrationComponent,
    AdminusersComponent,
    AdmintypesComponent,
    AdminservicesComponent,
    ServiceplanComponent,
    ModalAddReferenceComponent,
    ModalAddServiceComponent
  ],
  imports: [
    CalendarModule,
    MonthModule,
    MaterialExampleModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    InfiniteScrollModule,
    CdkVirtualScrollableElement,
    AgGridModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
