import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {pipe, throwError} from 'rxjs';
import{catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


  getData(){

    const httpOptions={
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer Rwcy1NFXC-mzYQjMNFOL'
        })
    };
    return this.http.get('https://the-one-api.dev/v2/movie',httpOptions)
    .pipe(catchError(
      (error) => {
        console.log(error);
        return throwError('Error');
      } ));
  }
}
