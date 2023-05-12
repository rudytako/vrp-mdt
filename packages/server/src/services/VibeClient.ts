import * as axios from "axios";
import { Character } from "../types/Account";

class VibeClient{
    private static _instance: VibeClient;
    private static _client: axios.AxiosInstance = axios.default.create({
        baseURL: "http://localhost:3001"
    });

    public static get Instance(){
        return this._instance || (this._instance = new this());
    }

    public static get client(){
        return this._client;
    }

    static async getCivilianByCharId(charId: string){
        return (await this._client.get(`/characters/${charId}`)).data;
    }
}

export default VibeClient;