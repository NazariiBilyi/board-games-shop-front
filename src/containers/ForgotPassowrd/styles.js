import {makeStyles} from "@mui/styles";
import forgotPassword from '../../assets/images/forgotPassHead.png'

export const useStyles = makeStyles({
    card: {
        minWidth: '414px',
        minHeight: '621px',
    },
    cardHeader: {
        backgroundImage: `url(${forgotPassword})`,
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