import axios from 'axios';

export class CiviliansService {
    static async getCivilian(id: string){
        const { data } = await axios.get(`/civilian/${id}`);
        return data;
    }

    static async findCivilian(civilian: string) {
        const { data } = await axios.get('/civilian/list', {params: {civilian}});
        return data;
    }

    //////////////////////////////////

    static async all(){
        const { data } = await axios.get('/civilian/list');
        return data;
    }
}