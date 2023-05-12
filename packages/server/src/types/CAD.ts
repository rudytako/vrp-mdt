export interface Unit{
    callsign: string;
    type: Unit_Type;
    status: Unit_Status;
    character?: string;
    division: string; // West Traffic Division, East Traffic Division czy jak to tam sie nazywa
}

type Unit_Type = 'LEA' | 'EMS' | 'FIRE';
type Unit_Status = 'FREE' | 'ON_SCENE' | 'ON_CALL' | 'ON_BREAK' | 'ON_TRAVEL' | 'ON_STANDBY';

export const ACTION_TYPES = {
    ADD_UNIT: 'ADD_UNIT',
    REMOVE_UNIT: 'REMOVE_UNIT',
    UPDATE_UNIT: 'UPDATE_UNIT',
    UPDATE_UNITS: 'UPDATE_UNITS',
}