import {IForgotPasswordParams, ILoginParams, ISignUpParams, ISignUpResponse} from "./types.ts";
import http from "../axios.ts";
import {ILoginResponse, IResetPasswordParams} from "@store/authSlicer/types.ts";
import {AxiosResponse} from "axios";
import {IGenericResponse} from "@services/types.ts";

export const AuthService = {
    async signUp(params: ISignUpParams): Promise<AxiosResponse<ISignUpResponse>> {
        return await http.put('/auth/signup', params)
    },
    async login(params: ILoginParams): Promise<AxiosResponse<ILoginResponse>> {
        return await http.post('/auth/login', params)
    },
    async forgotPassword(params: IForgotPasswordParams): Promise<AxiosResponse<IGenericResponse>> {
        return await http.post('/auth/forgotPassword', params)
    },
    async resetPassword(params: IResetPasswordParams): Promise<AxiosResponse<IGenericResponse>> {
        return await http.post('/auth/resetPassword', params)
    }
}