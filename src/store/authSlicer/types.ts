import {IForgotPasswordParams, ILoginParams, ISignUpParams} from "../../services/auth/types.ts";

export interface IAuthSliceState {
    auth: {
        token: null | string,
        id: null | string,
        userRole: null | number,
        isLoading: boolean,
        signUp: (params: ISignUpParams, callback: () => void) => Promise<void>,
        login: (params: ILoginParams, callback: () => void) => Promise<void>,
        forgotPassword: (params: IForgotPasswordParams, callback: () => void) => Promise<void>,
        resetPassword: (params: IResetPasswordParams, callback: () => void) => Promise<void>,
        clearToken: () => void,
    },
    updateAuthState: (state: Partial<IAuthSliceState['auth']>) => void;
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

