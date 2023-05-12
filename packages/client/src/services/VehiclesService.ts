import axios from 'axios';

export class VehiclesService {
    static async findVehicle(vehicle: string) {
        const { data } = await axios.get('/vehicle/list', {params: {vehicle}});
        return data;
    }

    static async addRecord(record: object) {
        const { data } = await axios.post('/vehicle/addRecord', record);
        return data;
    }

    static async getVehicle(plate: string){
        console.log(plate)
        const { data } = await axios.get(`/vehicle/${plate}`);
        return data;
    }

    //////////////////////////////

    static async all(){
        const { data } = await axios.get('/vehicle/');
        return data;
    }

    static async create(plate: string, status: string, charId: string){
        const { data } = await axios.post('/vehicle/', { plate, status, charId });
        return data;
    }

    static async update(plate: string, status: string, charId: string){
        const { data } = await axios.patch('/vehicle/', { plate, status, charId });
        return data;
    }

    static async delete(plate: string){
        const { data } = await axios.delete(`/vehicle/${plate}`);
        return data;
    }
}