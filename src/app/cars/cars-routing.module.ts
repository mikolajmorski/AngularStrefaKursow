import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarDetailsComponent} from './car-details/car-details.component';

const routes: Routes = [
  {path: 'cars/:id', component: CarDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
