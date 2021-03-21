import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { IDoctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  // Data URL
  private _url: string = "/assets/data/doctorInfo.json";

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<IDoctor[]> {
    return this.http.get<IDoctor[]>(this._url)
      .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Error fetching file");
  }
}
