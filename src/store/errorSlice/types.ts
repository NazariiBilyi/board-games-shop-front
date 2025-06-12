export interface IErrorSliceState {
    appError: string | null;
    setAppError: (error: string | null) => void;
}