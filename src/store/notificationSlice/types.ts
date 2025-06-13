export type INotification = {
    message: string,
    variant: 'error' | 'warning' | 'info' | 'success'
}

export interface INotificationState {
    notification: INotification | null;
    setNotification: (error: INotification | null) => void;
    clearNotification: () => void
}