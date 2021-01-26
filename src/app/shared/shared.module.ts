import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './component/button/button.component';
import { RouterModule } from '@angular/router';
import { CarDisplayComponent } from './component/car-display/car-display.component';
import { ShowPreferenceComponent } from './component/show-preference/show-preference.component';
import { PreferenceComponent } from './component/preference/preference.component';



@NgModule({
  declarations: [ButtonComponent, CarDisplayComponent, ShowPreferenceComponent, PreferenceComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ButtonComponent,
    PreferenceComponent,
    ShowPreferenceComponent
  ]
})
export class SharedModule { }
