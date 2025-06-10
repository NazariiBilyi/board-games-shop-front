import {Box, CircularProgress} from "@mui/material";
import {useStyles} from "./styles";

export const Loader = () => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <CircularProgress />
        </Box>
    );
}