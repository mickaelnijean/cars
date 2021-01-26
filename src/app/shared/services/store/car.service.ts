import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Car } from '../../model/car.model';
import { User } from '../../model/user.model';
import { CarRepositoryService } from '../database/car-repository.service';
import { UserRepositoryService } from '../database/user-repository.service';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private _cars: BehaviorSubject<Car[]> = new BehaviorSubject([]);
  private _currentCar: BehaviorSubject<Car> = new BehaviorSubject(null);
  public readonly cars: Observable<Car[]> = this._cars.asObservable();
  public readonly currentCar: Observable<Car> = this._currentCar.asObservable();

  constructor(private carRepository: CarRepositoryService) { }

  public updateAllCar(cars: Car[]) {
    this._cars.next(cars);
  }

  public updateCurrentCar(car: Car) {
    this._currentCar.next(car);
  }

  public getAllCar(): Car[] {
    const tempAllCars = this._cars.getValue();
    if (tempAllCars.length === 0) {
      this.carRepository.getAllCars().subscribe( (cars: Car[]) => this.updateAllCar(cars));
    }
    return this._cars.getValue();
  }
}
