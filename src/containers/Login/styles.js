import { makeStyles } from '@mui/styles';
import loginHead from '../../assets/images/loginHead.png'

export const useStyles = makeStyles({
    card: {
        minWidth: '414px',
        minHeight: '621px',
    },
    cardHeader: {
        backgroundImage: `url(${loginHead})`,
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