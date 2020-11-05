import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Car} from './models/car';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private apiUrl: string = 'http://localhost:3000/api/cars';
  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

}
