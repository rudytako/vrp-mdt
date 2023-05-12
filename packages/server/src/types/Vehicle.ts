import { Document, Types } from 'mongoose';
import { ICivilian } from './Civilian';
import { IRecord } from './Record';

export interface IVehicle extends Document {
    _id?: Types.ObjectId;
    model?: string;
    plate?: string;
    owner?: ICivilian['_id'];
    color?: string;
    uid?: string;
    lockedPrice?: number;
    lockedBy?: {
        name?: string;
        uid?: string;
    };
    records: IRecord['_id'][];
}