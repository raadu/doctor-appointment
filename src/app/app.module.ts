import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorsService } from './doctors.service';

@NgModule({
  declarations: [
    AppComponent,
    DoctorListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [DoctorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
