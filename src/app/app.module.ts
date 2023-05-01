import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {FlexLayoutModule} from "@angular/flex-layout";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {CdkVirtualScrollableElement} from "@angular/cdk/scrolling";

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
import { AuthorizationComponent } from './components/authorization/authorization.component';

import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';

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
    AuthorizationComponent
  ],
  imports: [
    BrowserModule,
    A11yModule,
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
    AgGridModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
