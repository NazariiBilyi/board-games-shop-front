import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles({
    root: {
        width: '100vw',
        height: '100vh'
    },
    content: {
        marginTop: '20px',
        marginLeft: '260px',
        width: 'calc(100% - 260px)',
        height: 'calc(100% - 84px)',
    }
})