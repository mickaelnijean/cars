import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car, Motor } from '../../model/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarRepositoryService {

  constructor() { }

  public getAllCars(): Observable<Car[]> {
    return of([
      {
        brand: 'Tesla',
        name: 'Model 3',
        color: 'red',
        motor: Motor.ELECTRIC
      }, {
        brand: 'Tesla',
        name: 'Model 3',
        color: 'blue',
        motor: Motor.ELECTRIC
      }, {
        brand: 'Tesla',
        name: 'Model S',
        color: 'red',
        motor: Motor.ELECTRIC
      }, {
        brand: 'Tesla',
        name: 'Model S',
        color: 'blue',
        motor: Motor.ELECTRIC
      }, {
        brand: 'Tesla',
        name: 'Model S',
        color: 'black',
        motor: Motor.ELECTRIC
      }, {
        brand: 'Renault',
        name: 'Clio',
        color: 'blue',
        motor: Motor.DIESEL
      }, {
        brand: 'Renault',
        name: 'Clio',
        color: 'red',
        motor: Motor.DIESEL
      }, {
        brand: 'Renault',
        name: 'Clio',
        color: 'white',
        motor: Motor.PETROL
      }
    ]);
  }
}
