import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../model/car.model';

@Component({
  selector: 'app-show-preference',
  templateUrl: './show-preference.component.html',
  styleUrls: ['./show-preference.component.scss']
})
export class ShowPreferenceComponent implements OnInit {

  @Input()
  cars: Car[];

  constructor() { }

  ngOnInit() {
  }

}
