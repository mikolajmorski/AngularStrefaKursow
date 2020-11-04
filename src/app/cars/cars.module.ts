import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';



@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CarsListComponent],
  declarations: [CarsListComponent]
})
export class CarsModule { }
