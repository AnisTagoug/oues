import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffreComponent } from './offre/offre.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SessionComponent } from './session/session.component';
import { AddsessionComponent } from './session/addsession/addsession.component';
import { UpdatesessionComponent } from './session/updatesession/updatesession.component';
import { CommonModule, DatePipe } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { MaterielComponent } from './materiel/materiel.component';
import { AddmaterielComponent } from './materiel/addmateriel/addmateriel.component';
import { UpdatematerielComponent } from './materiel/updatemateriel/updatemateriel.component';
import { StudygComponent } from './studyg/studyg.component';
import { AddStudygComponent } from './studyg/add-studyg/add-studyg.component';
import { UpdateStudygComponent } from './studyg/update-studyg/update-studyg.component';
import { OussamaComponent } from './oussama/oussama.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    OffreComponent,
    SidebarComponent,
    SessionComponent,
    AddsessionComponent,
    UpdatesessionComponent,
    CalendarComponent,
    MaterielComponent,
    AddmaterielComponent,
    UpdatematerielComponent,
    StudygComponent,
    AddStudygComponent,
    UpdateStudygComponent,
    OussamaComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule ,
    CommonModule,
    AppRoutingModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
