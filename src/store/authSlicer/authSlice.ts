import {ISignUpParams, ILoginParams, IForgotPasswordParams} from "@services/auth/types.ts";
import {AxiosResponse} from "axios";
import {IAuthResponse, IAuthSliceState, IJWTPayload, ILoginResponse, IResetPasswordParams} from "./types.ts";
import {AuthService} from "@services/auth/auth.ts";
import {StateCreator} from "zustand/vanilla";
import { jwtDecode } from "jwt-decode";
import {IErrorSliceState} from "@store/errorSlice/types.ts";

export const authSlice: StateCreator<
    IAuthSliceState & IErrorSliceState,
    [],
    [],
    IAuthSliceState
> = (set, get) => ({
    auth: {
        id: null,
        userRole: null,
        isLoading: false,
        token: null,
        signUp: async (params: ISignUpParams, callback: () => void): Promise<void> => {
            try {
                get().setAppError(null)
                get().updateAuthState({isLoading: true})

                const response: AxiosResponse<IAuthResponse> = await AuthService.signUp(params);

                const userData = response.data;

                callback();

                get().updateAuthState({ id: userData.userId, isLoading: false });
            } catch (e) {
                if(e instanceof Error) get().setAppError(e.message)
                get().updateAuthState({isLoading: false})
            }
        },
        login: async (params: ILoginParams, callback: () => void): Promise<void> => {
            try {
                get().setAppError(null)
                get().updateAuthState({isLoading: true})

                const response: AxiosResponse<ILoginResponse> = await AuthService.login(params);

                const userData = response.data;

                localStorage.setItem('accessToken', userData.token);
                const decoded = jwtDecode(userData.token) as IJWTPayload;

                get().updateAuthState({
                    id: decoded.id,
                    token: userData.token,
                    userRole: decoded.userRole,
                    isLoading: false
                });
                callback()
            } catch (e) {
                if(e instanceof Error) get().setAppError(e.message)
                get().updateAuthState({isLoading: false})
            }
        },
        forgotPassword: async(params: IForgotPasswordParams, callback: () => void ):Promise<void> => {
            try {
                get().setAppError(null)
                get().updateAuthState({isLoading: true})

                await AuthService.forgotPassword(params);

                callback()
                get().updateAuthState({isLoading: false})

            } catch (e) {
                if(e instanceof Error) get().setAppError(e.message)
                get().updateAuthState({isLoading: false})
            }
        },
        resetPassword: async(params: IResetPasswordParams, callback: () => void):Promise<void> => {
            try {
                get().setAppError(null)
                get().updateAuthState({isLoading: true})

                await AuthService.resetPassword(params)

                callback()

                get().updateAuthState({isLoading: false})

            } catch (e) {
                if(e instanceof Error) get().setAppError(e.message)
                get().updateAuthState({isLoading: false})
            }
        },
        clearToken: () => {
            get().updateAuthState({token: null})
        },
    },
    updateAuthState: (partialAuth) =>
        set((state) => ({
            auth: {
                ...state.auth,
                ...partialAuth,
            },
        })),
})