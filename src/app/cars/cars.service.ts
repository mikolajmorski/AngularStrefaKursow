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

  getCar(id: number): Observable<Car> {
    return this.http.get<Car>(this.apiUrl + `/${id}`);
  }

  addCar(data): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, data);
  }

  updateCar(id: number, data): Observable<Car> {
    return this.http.put<Car>(this.apiUrl + `/${id}`, data);
  }

  removeCar(id: number): Observable<Car> {
    return this.http.delete<Car>(this.apiUrl + `/${id}`);
  }
}
