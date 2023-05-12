import axios from 'axios';

export class PropertyService {
    static async findProperty(property: string) {
        const { data } = await axios.get(`/property/list`, {params: {property}});
        return data;
    }

    static async getProperty(id: string){
        const { data } = await axios.get(`/property/${id}`);
        return data;
    }

    ////////////////////////////////

    static async all(){
        const { data } = await axios.get('/property/list');
        return data;
    }
}