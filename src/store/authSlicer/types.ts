import {IForgotPasswordParams, ILoginParams, ISignUpParams} from "../../services/auth/types.ts";

export interface IAuthState {
    token: null | string,
    id: null | string,
    error: null | string,
    userRole: null | number,
    signUp: (params: ISignUpParams, callback: () => void) => Promise<void>,
    login: (params: ILoginParams, callback: () => void) => Promise<void>,
    forgotPassword: (params: IForgotPasswordParams, callback: () => void) => Promise<void>,
    resetPassword: (params: IResetPasswordParams, callback: () => void) => Promise<void>,
    clearToken: () => void,
    setState: (state: any) => void
}

export interface IAuthResponse {
    message: string;
    userId: string;
    errors?: [];
}

export interface IJWTPayload {
    id: string;
    userRole: number;
}

export enum UserRoles {
    ADMIN = 1,
    USER = 0
}

export interface ILoginResponse {
    message: string;
    userId: string;
    token: string;
    errors?: [];
}

export interface IResetPasswordParams {
    password: string,
    token: string,
    userId: string
}

