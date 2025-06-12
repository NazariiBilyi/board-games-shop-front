import { create } from "zustand";
import {authSlice} from "./authSlicer/authSlice.ts";
import {IAuthSliceState} from "./authSlicer/types.ts";
import {adminSlice} from "./adminSlicer/adminSlice.ts";
import {IAdminSliceState} from "./adminSlicer/types.ts";
import {IErrorSliceState} from "@store/errorSlice/types.ts";
import {errorSlice} from "@store/errorSlice/errorSlice.ts";

const useCombinedStore = create<IAuthSliceState & IAdminSliceState & IErrorSliceState>()((...args) => ({
    ...authSlice(...args),
    ...adminSlice(...args),
    ...errorSlice(...args),
}))

export default useCombinedStore;