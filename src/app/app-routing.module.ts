import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffreComponent } from './offre/offre.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SessionComponent } from './session/session.component';
import { AddsessionComponent } from './session/addsession/addsession.component';
import { UpdatesessionComponent } from './session/updatesession/updatesession.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MaterielComponent } from './materiel/materiel.component';
import { AddmaterielComponent } from './materiel/addmateriel/addmateriel.component';
import { UpdatematerielComponent } from './materiel/updatemateriel/updatemateriel.component';
import { StudygComponent } from './studyg/studyg.component';
import { AddStudygComponent } from './studyg/add-studyg/add-studyg.component';
import { UpdateStudygComponent } from './studyg/update-studyg/update-studyg.component';
import { OussamaComponent } from './oussama/oussama.component';
const routes: Routes = [
  {path: 'offre', component: OffreComponent},
  {path: 'sidebar', component: SidebarComponent},
  {path: 'session', component: SessionComponent},
  {path: 'addsess', component: AddsessionComponent},
  {path: 'update-sess/:id', component: UpdatesessionComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'materiel', component: MaterielComponent},
  {path: 'addmat', component: AddmaterielComponent},
  {path: 'update-mat/:id', component: UpdatematerielComponent},
  {path: 'studyg', component: StudygComponent},
  {path: 'addsg', component: AddStudygComponent},
  {path: 'updatesg/:id', component: UpdateStudygComponent},
  {path: 'oues', component: OussamaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
