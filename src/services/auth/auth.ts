import {ISignUpParams} from "./types.ts";
import http from "../axios.ts";

export const AuthService = {
    async signUp(params: ISignUpParams) {
        return await http.put('/auth/signup', params)
    }
}