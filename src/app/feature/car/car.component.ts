import { Component, OnInit } from '@angular/core';
import { Car } from '@shared/model/car.model';
import { CarRepositoryService } from '@shared/services/database/car-repository.service';
import { CarService } from '@shared/services/store/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  constructor(public carRepository: CarRepositoryService,
              public carStore: CarService,
              ) { }

  ngOnInit() {
    this.carRepository.getAllCars().subscribe((cars: Car[]) => {
      this.carStore.updateAllCar(cars);
    });
  }

}
