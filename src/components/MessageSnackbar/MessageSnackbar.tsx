import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import {Alert} from "@mui/material";
import {useEffect, useState, SyntheticEvent} from "react";
import useCombinedStore from "@store/store.ts";

const MessageSnackbar = () => {
    const [open, setOpen] = useState(false);

    const error = useCombinedStore(state => state.appError)

    useEffect(() => {
        if(error){
            setOpen(true);
        }
    }, [error]);

    const handleClose = (
        _event?: SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity={error ? "error" : "success"}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {error}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default MessageSnackbar