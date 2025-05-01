import {ISignUpParams, ILoginParams, IForgotPasswordParams} from "../../services/auth/types.ts";
import {AxiosResponse} from "axios";
import {IAuthResponse, IAuthState, IJWTPayload, ILoginResponse, IResetPasswordParams} from "./types.ts";
import {AuthService} from "../../services/auth/auth.ts";
import {StateCreator} from "zustand/vanilla";
import { jwtDecode } from "jwt-decode";

export const authSlice: StateCreator<IAuthState> = (set) => ({
    token: null,
    id: null,
    error: null,
    userRole: null,
    signUp: async (params: ISignUpParams, callback: () => void): Promise<void> => {
        try {
            set({error: 'null'})

            const response: AxiosResponse<IAuthResponse> = await AuthService.signUp(params);

            const userData = response.data;

            callback();

            set({ id: userData.userId });
        } catch (error) {
            console.log(error)
            // Handle authentication errors

        }
    },
    login: async (params: ILoginParams, callback: () => void): Promise<void> => {
        try {
            set({error: 'null'})

            const response: AxiosResponse<ILoginResponse> = await AuthService.login(params);

            const userData = response.data;

            localStorage.setItem('accessToken', userData.token);
            const decoded = jwtDecode(userData.token) as IJWTPayload;

            set({ id: decoded.id, token: userData.token, userRole: decoded.userRole });
            callback()
        } catch (error) {
            console.log(error)
            set({error: 'Invalid Credentials'})
            // Handle authentication errors
        }
    },
    forgotPassword: async(params: IForgotPasswordParams, callback: () => void ):Promise<void> => {
        try {
            set({error: 'null'})

            await AuthService.forgotPassword(params);

            callback()

        } catch (error) {
            console.log(error)
            set({error: 'Something went wrong'})
            // Handle authentication errors
        }
    },
    resetPassword: async(params: IResetPasswordParams, callback: () => void):Promise<void> => {
        try {
            set({error: 'null'})

            await AuthService.resetPassword(params)

            callback()

        } catch (error) {
            console.log(error)
            set({error: 'Something went wrong'})
        }
    },
    clearToken: () => {
        set({token: null})
    }
})