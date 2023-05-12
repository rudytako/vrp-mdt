export interface ICivilian{
    _id?: string;
    cId?: number;
    name?: string;
    dob?: string;
    sex?: number;
    unpaidInvoices?: number;
    additionalInfo?: {
        height: number;
        weight: number;
        eyeColor: string;
    };
    records?: any[];
    vehicles?: string[];
    properties?: string[];
    weapons?: string[];
    licenses?: string[];
}
