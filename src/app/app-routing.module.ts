import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarsListComponent} from './cars/cars-list/cars-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'cars'},
  {path: 'cars', component: CarsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
