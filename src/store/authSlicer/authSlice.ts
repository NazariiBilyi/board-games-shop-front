import {ISignUpParams, ILoginParams} from "../../services/auth/types.ts";
import {AxiosResponse} from "axios";
import {IAuthResponse, IAuthState, ILoginResponse} from "./types.ts";
import {AuthService} from "../../services/auth/auth.ts";
import {StateCreator} from "zustand/vanilla";

export const authSlice: StateCreator<IAuthState> = (set) => ({
    token: null,
    id: null,
    error: null,
    signUp: async (params: ISignUpParams): Promise<void> => {
        try {
            set({error: 'null'})

            const response: AxiosResponse<IAuthResponse> = await AuthService.signUp(params);

            const userData = response.data;

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

            set({ id: userData.userId, token: userData.token });
            callback()
        } catch (error) {
            console.log(error)
            set({error: 'Invalid Credentials'})
            // Handle authentication errors
        }
    },
    clearToken: () => {
        set({token: null})
    }
})