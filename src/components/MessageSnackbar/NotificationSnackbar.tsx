import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import {Alert} from "@mui/material";
import {useEffect, useState, SyntheticEvent} from "react";
import useCombinedStore from "@store/store.ts";

const NotificationSnackbar = () => {
    const [open, setOpen] = useState(false);

    const notification = useCombinedStore(state => state.notification)

    useEffect(() => {
        if(notification){
            setOpen(true);
        }
    }, [notification]);

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
                    severity={notification?.variant}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {notification?.message}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default NotificationSnackbar