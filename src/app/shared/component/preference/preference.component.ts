import { Component, Input, OnInit } from '@angular/core';
import { Motor } from '../../model/car.model';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.scss']
})
export class PreferenceComponent implements OnInit {

  @Input()
  color: string;

  @Input()
  motor: Motor;

  constructor() { }

  ngOnInit() {
  }

}
