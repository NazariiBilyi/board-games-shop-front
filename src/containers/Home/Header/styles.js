import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles({
    title: {
        fontFamily: "Uncial Antiqua",
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: '54px',
        color: 'rgb(164, 123, 64)',
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, 0)'
    },
    appBar: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
    },
    menuButton: {
        backgroundImage: 'url(public/assets/account.jpeg)',
        backgroundSize: 'contain',
        height: '34px',
        width: '34px',
    },
    stack: {
        width: '100%'
    }
})