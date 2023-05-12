import axios from 'axios';
import AuthStateStore from 'src/stores/AuthStateStore';

export default class AuthorizationService {

    static async login(username: string, password: string) {
        const response = await axios.post('/api/auth/login', { username, password });
        if(response.data.token != null){
            AuthStateStore.setAuthState(response.data.token);
        }

        return response.data;
    }

    static async logout() {
        AuthStateStore.setAuthState(null);
    }
}