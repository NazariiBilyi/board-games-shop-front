import {INotificationState} from "@store/notificationSlice/types.ts";
import {StateCreator} from "zustand/vanilla";

export const notificationSlice: StateCreator<INotificationState> = (set) => ({
    notification: null,
    setNotification: (notification) => set({ notification: notification }),
    clearNotification: () => set({notification: null}),
})