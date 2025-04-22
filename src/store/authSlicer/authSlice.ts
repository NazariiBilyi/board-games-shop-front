import {ISignUpParams} from "../../services/auth/types.ts";
import {AxiosResponse} from "axios";
import {IAuthResponse, IAuthState} from "./types.ts";
import {AuthService} from "../../services/auth/auth.ts";
import {StateCreator} from "zustand/vanilla";

export const authSlice: StateCreator<IAuthState> = (set) => ({
    token: null,
    id: null,
    signUp: async (params: ISignUpParams): Promise<void> => {
        console.log(params)
        try {
            const response: AxiosResponse<IAuthResponse> = await AuthService.signUp(params);

            const userData = response.data;
            console.log(userData)

            set({ id: userData.userId });
        } catch (error) {
            console.log(error)
            // Handle authentication errors

        }
    },
})