import { Document } from 'mongoose';
import { ICivilian } from './Civilian';

export interface IWeapon extends Document {
  owner: ICivilian['_id'];
  uid: string;
  type: string;
  serial: string;
  model: string;
}
