import {IGenericResponse} from "@services/types.ts";

export interface ISignUpParams {
    email: string,
    password: string,
    firstName: string,
    lastName: string
}

export interface ISignUpResponse extends IGenericResponse {
    userId: string
}

export interface ILoginParams{
    email: string,
    password: string,
}

export interface IForgotPasswordParams {
    email: string
    environmentURL: string
}