import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './feature/car/car.component';
import { UserCanLoadService } from './feature/service/user-can-load.service';


const routes: Routes = [{
  path: '',
  component: CarComponent
}, {
  path: 'user/:name',
  loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule),
  canLoad: [UserCanLoadService]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
