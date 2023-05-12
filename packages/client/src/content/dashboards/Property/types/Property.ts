import { ICivilian } from "../../Civilian/types/Civilian";

export interface IProperty{
    _id?: string;
    name?: string;
    type: string;
    owner: ICivilian;
    pId: string;
    uid: string;
    address: string;
}
