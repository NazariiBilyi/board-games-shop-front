import {makeStyles} from "@mui/styles";
import url from "../../assets/images/background.png";

export const useStyles = makeStyles({
    background: {
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover'
    },
})