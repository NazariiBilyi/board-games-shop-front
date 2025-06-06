import {IForgotPasswordParams, ILoginParams, ISignUpParams} from "./types.ts";
import http from "../axios.ts";
import {IResetPasswordParams} from "../../store/authSlicer/types.ts";
import {AxiosResponse} from "axios";

export const AuthService = {
    async signUp(params: ISignUpParams): Promise<AxiosResponse<any>> {
        return await http.put('/auth/signup', params)
    },
    async login(params: ILoginParams) {
        return await http.post('/auth/login', params)
    },
    async forgotPassword(params: IForgotPasswordParams) {
        return await http.post('/auth/forgotPassword', params)
    },
    async resetPassword(params: IResetPasswordParams) {
        return await http.post('/auth/resetPassword', params)
    }
}