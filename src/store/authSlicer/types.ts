import {ISignUpParams} from "../../services/auth/types.ts";

export interface IAuthState {
    token: null | string,
    id: null | string,
    signUp: (params: ISignUpParams) => Promise<void>
}

export interface IAuthResponse {
    message: string;
    userId: string;
    errors?: [];
}