import { Document } from 'mongoose';
import { ICivilian } from './Civilian';

export interface IProperty extends Document {
  owner: ICivilian['_id'];
  uid: string;
  pId: string;
  address: string;
  type: string;
  name: string;
}
