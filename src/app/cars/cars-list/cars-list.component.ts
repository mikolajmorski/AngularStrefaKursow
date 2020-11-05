import {AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Car} from '../models/car';
import {TotalCostComponent} from '../total-cost/total-cost.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit, AfterViewInit {
  @ViewChild("totalCostRef") totalCostRef: TotalCostComponent;

  totalCost: number;
  grossCost: number;
  cars: Car[] = [
    {
      id: 1,
      model: 'Mazda Rx7',
      plate: '6d2121e',
      deliveryDate: '21-04-2017',
      deadline: '05-05-2016',
      client: {
        firstName: 'Jan',
        surname: 'Kowalski'
      },
      cost: 300,
      isFullyDamaged: true
    },
    {
      id: 2,
      model: 'Mazda Rx7',
      plate: 'EL4545W',
      deliveryDate: '21-04-2017',
      deadline: '05-05-2016',
      client: {
        firstName: 'Jan',
        surname: 'Kowalski'
      },
      cost: 500,
      isFullyDamaged: true
    },
    {
      id: 3,
      model: 'Mazda Rx7',
      plate: 'GD1212E',
      deliveryDate: '21-04-2017',
      deadline: '05-05-2016',
      client: {
        firstName: 'Jan',
        surname: 'Kowalski'
      },
      cost: 300,
      isFullyDamaged: false
    }
  ];
  constructor() { }

  ngOnInit(): void {
    this.countTotalCost();
  }

  ngAfterViewInit() {
    this.totalCostRef.showGross();
  }

  showGross(): void {
    /*//this.totalCostRef.showGross();*/
  }

  countTotalCost(): void {
    this.totalCost = this.cars
      .map((car) => car.cost)
      .reduce((prev, next) => prev + next);
  }

  onShownGross(grossCost: number): void {
    this.grossCost = grossCost;
  }

}
