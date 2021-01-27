import { Component, OnInit } from '@angular/core';
import { Car } from '@shared/model/car.model';
import { Preference, User } from '@shared/model/user.model';
import { CarService } from '@shared/services/store/car.service';
import { UserService } from '@shared/services/store/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  color: string;
  motor: string;
  cars: Car[];

  constructor(public carStore: CarService,
              public userStore: UserService
    ) { }

  ngOnInit() {
    this.userStore.currentUser.subscribe((user: User) => {
      if (user) {
        this.updatePrefernces(user);
        this.getPreferencesCars(user);
      }
    });
  }

  updatePrefernces(user: User): void {
    if (user.preferences) {
      this.color = user.preferences.color;
      this.motor = user.preferences.motor;
    } else {
      this.color = undefined;
      this.motor = undefined;
    }
  }

  getPreferencesCars(user: User): void {
    const allCars = this.carStore.getAllCar();
    if (user.preferences) {
      const preferences: Preference = user.preferences;
      this.cars = allCars.filter( car => keepPreferencesCar(car, preferences));
    } else {
      this.cars = allCars;
    }
  }

}
function keepPreferencesCar(car: Car, preferences: Preference): unknown {
  if (preferences.color) {
    if (car.color !== preferences.color) {
      return false;
    }
  }
  if (preferences.motor) {
    if (car.motor !== preferences.motor) {
      return false;
    }
  }
  return  true;
}

