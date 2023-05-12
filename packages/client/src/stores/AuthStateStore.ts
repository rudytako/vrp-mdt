import { makeAutoObservable } from "mobx";
import jwt from "jsonwebtoken";


//State store to manage the authentication state of the user
export default makeAutoObservable({
    //The user's authentication token
    token: null as string | null,
    isLogged: false,

    setAuthState(token: string | null) {
        this.token = token;
        this.isLogged = token != null;
    },

    get isLoggedIn(){
        return this.isLogged;
    },

    get authToken(){
        return this.token;
    },

    get authHeader(){
        return this.token ? { Authorization: `Bearer ${this.token}` } : {};
    },

    resolveToken(): { [key: string]: any } | null {
        if (this.token) {
            const decoded = jwt.decode(this.token);
            if (decoded) {
                return decoded as { [key: string]: any };
            }
        }
        return null;
    }

});