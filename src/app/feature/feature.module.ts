import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserRoutingModule } from './user/user-routing.module';
import { CarComponent } from './car/car.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [UserComponent, CarComponent],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
  ]
})
export class FeatureModule { }
