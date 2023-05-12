export type AccountPermission = 'CREATE_MDT_USERS' | 'MANAGE_PERMISSIONS' | 'VIEW_MDT_LOGS' | 'MDT_ADMIN' | 'MANAGE_UNITS';
export type CharacterPermission = 'MANAGE_CIVILIANS' | 'MANAGE_PROPERTIES' | 'MANAGE_BOLO' | 'MANAGE_VEHICLES' | 'MANAGE_REPORT';
export type CHARACTER_GROUP_TYPE = 'LEA' | 'FIRE' | 'MED';

export interface Character{
    uid: string;
    cid: string;
    name: string;
    groups: CHARACTER_GROUP_TYPE[];
    permissions: CharacterPermission[];
    user: UserAccount;
}

export interface UserAccount{
    _id?: string;
    permissions: AccountPermission[];
    password: string;
    characters: Character[];
    salt?: string;
    email: string;
}

export interface Civilian{
    _id?: string;
    name: string;
    dob: string;
    sex: number;
    unpaidInvoices: number;
    additionalInfo: {
        height: number;
        weight: number;
        eyeColor: string;
    };
    records: string[];
    vehicles: string[];
    properties: string[];
    weapons: string[];
}
