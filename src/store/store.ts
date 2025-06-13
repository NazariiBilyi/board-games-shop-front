import { create } from "zustand";
import {authSlice} from "./authSlicer/authSlice.ts";
import {IAuthSliceState} from "./authSlicer/types.ts";
import {adminSlice} from "./adminSlicer/adminSlice.ts";
import {IAdminSliceState} from "./adminSlicer/types.ts";
import {INotificationState} from "@store/notificationSlice/types.ts";
import {notificationSlice} from "@store/notificationSlice/notificationSlice.ts";

const useCombinedStore = create<IAuthSliceState & IAdminSliceState & INotificationState>()((...args) => ({
    ...authSlice(...args),
    ...adminSlice(...args),
    ...notificationSlice(...args),
}))

export default useCombinedStore;