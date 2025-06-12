import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles({
    root: {
        width: '100vw',
        height: '100vh',
        overflow: 'hidden'
    },
    contentWrapper: {
        height: 'calc(100vh - 65px)',
    },
    content: {
        padding: '20px 40px',
        height: '100%',
        width: '100%',
        overflow: 'scroll',
    }
})