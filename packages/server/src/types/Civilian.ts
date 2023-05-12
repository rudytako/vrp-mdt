import { Document } from 'mongoose';
import { IVehicle } from './Vehicle';
import { IProperty } from './Property';
import { IWeapon } from './Weapon';
import { IRecord } from './Record';

export interface ICivilian extends Document {
  cId: number;
  name: string;
  vehicles: IVehicle['_id'][];
  properties: IProperty['_id'][];
  weapons: IWeapon['_id'][];
  dob: Date;
  sex: 0 | 1; // 0 - Kobieta, 1 - Mężczyzna
  unpaidInvoices: number;
  additionalInfo: {
    height: number;
    weight: number;
    eyeColor: string;
  };
  records: IRecord['_id'][];
  licenses: ('DRIVER' | 'CCW' | 'GREEN_CARD')[];
}
