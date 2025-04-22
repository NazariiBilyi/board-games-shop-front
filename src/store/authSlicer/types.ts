import {ILoginParams, ISignUpParams} from "../../services/auth/types.ts";

export interface IAuthState {
    token: null | string,
    id: null | string,
    error: null | string,
    signUp: (params: ISignUpParams) => Promise<void>,
    login: (params: ILoginParams, callback: () => void) => Promise<void>,
    clearToken: () => void,
}

export interface IAuthResponse {
    message: string;
    userId: string;
    errors?: [];
}

export interface ILoginResponse {
    message: string;
    userId: string;
    token: string;
    errors?: [];
}

