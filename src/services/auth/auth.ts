import {ILoginParams, ISignUpParams} from "./types.ts";
import http from "../axios.ts";

export const AuthService = {
    async signUp(params: ISignUpParams) {
        return await http.put('/auth/signup', params)
    },
    async login(params: ILoginParams) {
        return await http.post('/auth/login', params)
    }
}