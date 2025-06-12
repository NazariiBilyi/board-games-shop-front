import {IErrorSliceState} from "@store/errorSlice/types.ts";
import {StateCreator} from "zustand/vanilla";

export const errorSlice: StateCreator<IErrorSliceState> = (set) => ({
    appError: null,
    setAppError: (error) => set({ appError: error }),
})