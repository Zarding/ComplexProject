import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './components/add-client/add-client.component';
import { MainIndexComponent } from './components/main-index/main-index.component';
import { MainClientComponent } from './components/main-client/main-client.component';
import { MainClientInformationComponent } from './components/main-client-information/main-client-information.component';
import { MainClientDocumentsComponent } from './components/main-client-documents/main-client-documents.component';
import { MainClientServicePlansComponent } from './components/main-client-service-plans/main-client-service-plans.component';
import { MainClientReferencesComponent } from './components/main-client-references/main-client-references.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { AllclientsComponent } from './components/allclients/allclients.component';
import { CalendarclientsComponent } from './components/calendarclients/calendarclients.component';

const routes: Routes = [
  {path: '', component: AuthorizationComponent},
  {path: 'addClient', component: AddClientComponent},
  {path: 'clients', component: MainIndexComponent, children:
[
  {path: 'allclients', component: AllclientsComponent},
  {path: 'calendar', component: CalendarclientsComponent}
]},
  {path: 'clients/:name', component: MainClientComponent, children: 
  [
    {path: 'information', component: MainClientInformationComponent},
    {path: 'documents', component: MainClientDocumentsComponent}, 
    {path: 'serviceplans', component: MainClientServicePlansComponent},
    {path: 'references', component: MainClientReferencesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
