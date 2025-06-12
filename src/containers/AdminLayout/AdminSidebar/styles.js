import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles({
    drawer: {
        width: '240px',
        flexShrink: 0,
        height: 'calc(100vh - 65px)',

         '&& .MuiDrawer-paper' :{
            width: '240px',
             position: "unset",
             boxSizing: 'border-box',
         },
    },
})