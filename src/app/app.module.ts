import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatNativeDateModule} from "@angular/material/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FlexLayoutModule} from "@angular/flex-layout";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {CdkVirtualScrollableElement} from "@angular/cdk/scrolling";
import {MatDatepickerModule} from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainIndexComponent } from './components/main-index/main-index.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { AgGridModule } from 'ag-grid-angular';
import { MainClientComponent } from './components/main-client/main-client.component';
import { MainClientInformationComponent } from './components/main-client-information/main-client-information.component';
import { MainClientDocumentsComponent } from './components/main-client-documents/main-client-documents.component';
import { MainClientServicePlansComponent } from './components/main-client-service-plans/main-client-service-plans.component';
import { MainClientReferencesComponent } from './components/main-client-references/main-client-references.component';

@NgModule({
  declarations: [
    AppComponent,
    MainIndexComponent,
    AddClientComponent,
    MainClientComponent,
    MainClientInformationComponent,
    MainClientDocumentsComponent,
    MainClientServicePlansComponent,
    MainClientReferencesComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatListModule,
    MatCardModule,
    MatDatepickerModule,
    MatButtonModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    InfiniteScrollModule,
    CdkVirtualScrollableElement,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
