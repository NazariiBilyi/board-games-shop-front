import { create } from "zustand";
import {authSlice} from "./authSlicer/authSlice.ts";
import {IAuthState} from "./authSlicer/types.ts";
import {adminSlice} from "./adminSlicer/adminSlice.ts";
import {IAdminState} from "./adminSlicer/types.ts";

const useCombinedStore = create<IAuthState & IAdminState>()((...a) => ({
    ...authSlice(...a),
    ...adminSlice(...a),
    // ...createFishSlice(...a),
}))

export default useCombinedStore;