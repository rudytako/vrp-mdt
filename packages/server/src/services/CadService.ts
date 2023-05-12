import { Unit } from "../types/CAD";

export default class CadService{ //Computer Aided Dispatch

    units: Array<Unit> = [];

    constructor(){
        this.units = [];
    }

    addUnit(unit: Unit, character: string){
        if(this.units.find((u) => u.callsign === unit.callsign)) return;
        unit.character = character;
        this.units.push(unit);
    }

    removeUnit(unit: Unit){
        this.units = this.units.filter((u) => u.callsign !== unit.callsign);
    }

    getUnits(){
        return this.units;
    }

    getUnitByCallsign(callsign: string){
        return this.units.find((u) => u.callsign === callsign)!;
    }

    getUnitsByType(type: string){
        return this.units.filter((u) => u.type === type);
    }

    getCharactersUnit(character: string){
        return this.units.find((u) => u.character === character);
    }

    updateUnit(unit: Unit, updated: Unit){
        const index = this.units.findIndex((u) => u.callsign === unit.callsign);
        if(index === -1) return;
        this.units[index] = updated;
        return this.units[index];
    }

    resolveCallsign(unit: Unit){
        return unit.callsign;
    }
}