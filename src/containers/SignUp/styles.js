import { makeStyles } from '@mui/styles';
import signUpHead from '../../assets/images/signupHead.png'

export const useStyles = makeStyles({
    card: {
        minWidth: '414px',
        minHeight: '621px',
    },
    cardHeader: {
        backgroundImage: `url(${signUpHead})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: '245px',
    },
    signUpBtn: {
        width: '100%',
    },
    loginBtn: {
        width: "fit-content",
    }
})