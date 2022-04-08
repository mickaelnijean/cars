import { Component, OnInit } from '@angular/core';
import { CarRepositoryService } from './shared/services/database/car-repository.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'entretien';
  cars = [];
  constructor(public carRepositoryService: CarRepositoryService) {
  }

  ngOnInit(): void {
    this.carRepositoryService.getAllCars()
    .subscribe(cars => this.cars = cars);
  }
}
