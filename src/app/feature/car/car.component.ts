import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/shared/model/car.model';
import { CarRepositoryService } from 'src/app/shared/services/database/car-repository.service';
import { CarService } from 'src/app/shared/services/store/car.service';

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
