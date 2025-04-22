import { create } from "zustand";
import {authSlice} from "./authSlicer/authSlice.ts";
import {IAuthState} from "./authSlicer/types.ts";

const useCombinedStore = create<IAuthState>()((...a) => ({
    ...authSlice(...a),
    // ...createFishSlice(...a),
}))

export default useCombinedStore;