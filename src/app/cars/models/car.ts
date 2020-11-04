import {Client} from './client';
export interface Car {
  id: number;
  model: string;
  plate: string;
  deliveryDate: string;
  deadline: string;
  client: Client;
  cost: number;
  isFullyDamaged: boolean;

}
