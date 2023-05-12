import { ICivilian } from "../../Civilian/types/Civilian";

export interface IVehicle{
    _id?: string;
    model?: string;
    plate?: string;
    owner?: ICivilian;
    color?: string;
    uid?: string;
    lockedPrice?: number;
    lockedBy?: {
        name: string;
        uid: string;
    };
    records?: string[];
}