import { Document } from 'mongoose';
import { ICivilian } from './Civilian';
import { IVehicle } from './Vehicle';

export interface IRecord extends Document {
  addedBy?: string;
  addedAt?: Date;
  //character?: string;
  //vehicle?: IVehicle['_id'];
  type?: number;
  description?: string;
}