import { Component, OnInit } from '@angular/core';
import {DoctorsService} from '../doctors.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  // Data 
  public doctors = [];
  public errorMessage;
  

  constructor(private _doctorsService: DoctorsService) { 
    
  }

  ngOnInit(): void {
    this._doctorsService.getDoctors()
      .subscribe(data => 
        this.doctors = data,
        error => this.errorMessage = error, 
      );
  }

}
