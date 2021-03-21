import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorsService } from './doctors.service';
import { NotFoundComponent } from './not-found/not-found.component';
import {AppRoutingModule, routingComponents} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    DoctorListComponent,
    NotFoundComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [DoctorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
