import {makeStyles} from "@mui/styles";
import resetPassHead from "../../assets/images/resetPassHead.png";

export const useStyles = makeStyles({
    card: {
        minWidth: '414px',
        minHeight: '621px',
    },
    cardHeader: {
        backgroundImage: `url(${resetPassHead})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: '245px',
    },
    loginBtn: {
        width: '100%',
    },
    signUpBtn: {
        width: "fit-content",
    }
})