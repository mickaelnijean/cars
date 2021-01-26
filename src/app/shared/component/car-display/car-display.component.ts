import { Component, Input, OnInit } from '@angular/core';
import { Motor } from '../../model/car.model';

@Component({
  selector: 'app-car-display',
  templateUrl: './car-display.component.html',
  styleUrls: ['./car-display.component.scss']
})
export class CarDisplayComponent implements OnInit {

  @Input()
  brand: string;
  @Input()
  name: string;
  @Input()
  color: string;
  @Input()
  motor: Motor;

  constructor() { }

  ngOnInit() {
  }

}
