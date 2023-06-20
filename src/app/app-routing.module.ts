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
import { AddServiceplanComponent } from './components/addserviceplan/addserviceplan.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { AdminusersComponent } from './components/administration/adminusers/adminusers.component';
import { AdmintypesComponent } from './components/administration/admintypes/admintypes.component';
import { AdminservicesComponent } from './components/administration/adminservices/adminservices.component';
import { ServiceplanComponent } from './components/serviceplan/serviceplan.component';

const routes: Routes = [
  {path: '', component: AuthorizationComponent},
  {path: 'addClient', component: AddClientComponent},
  {path: 'clients', component: MainIndexComponent, children:
[
  {path: 'allclients', component: AllclientsComponent},
  {path: 'calendar', component: CalendarclientsComponent}
]},
  {path: 'clients/:id', component: MainClientComponent, children: 
  [
    {path: 'information', component: MainClientInformationComponent},
    {path: 'documents', component: MainClientDocumentsComponent}, 
    {path: 'serviceplans', component: MainClientServicePlansComponent},
    {path: 'serviceplan/:id', component: ServiceplanComponent},
    {path: 'references', component: MainClientReferencesComponent},
    {path: 'addserviceplan', component: AddServiceplanComponent}
  ]},
  { path: 'administration', component: AdministrationComponent, children:
  [
    { path: 'users', component: AdminusersComponent },
    { path: 'types', component: AdmintypesComponent },
    { path: 'services', component: AdminservicesComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
