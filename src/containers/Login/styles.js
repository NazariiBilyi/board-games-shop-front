import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    card: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: '414px',
        minHeight: '621px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: `
            linear-gradient(to bottom, rgba(214, 165, 97, 0.92), rgba(173, 112, 50, 0.92)),
            url('https://www.transparenttextures.com/patterns/fibers.png'), 
            url('https://www.transparenttextures.com/patterns/noise.png'), 
            url('https://www.transparenttextures.com/patterns/paper-fibers.png')
          `,
        backgroundColor: "rgb(214, 165, 97)", // warm parchment base
        backgroundBlendMode: "multiply, multiply, overlay, normal",
        backgroundRepeat: "repeat",
        border: "3px solid #4a2e15", // burn effect
        borderRadius: "12px",
        padding: "20px",
        boxShadow: `
            0 0 12px 4px rgba(42, 24, 9, 0.6),    
            inset 0 0 10px rgba(0, 0, 0, 0.1),    
            inset 0 0 20px rgba(50, 30, 10, 0.2)
          `,
        fontFamily: "Georgia, serif",
        color: "#3b1f0f"
    },
    cardHeader: {
        backgroundImage: 'url(public/assets/loginHead.png)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: '245px',
    },
    input: {
        backgroundColor: 'rgb(221, 185, 119)',
        borderRadius: '10px',
        /* border: 2px solid rgb(138, 92, 45); */
        color: 'rgb(132, 92, 44)',
    },
    loginBtn: {
        width: '100%',
        background: 'linear-gradient(to bottom, #a65c1e, #7c3f12)', /* gradient */
        border: '2px solid #5a2e0c',
        borderRadius: '8px',
        color: '#f5deb3',
        fontFamily: 'Georgia, serif',
        fontSize: '24px',
        padding: '12px 40px',
        boxShadow: 'inset 0 0 5px #522e0f, 0 2px 5px rgba(0, 0, 0, 0.4)',
        textShadow: '1px 1px #000',
        cursor: 'pointer',
        transition: 'background 0.3s',

        "&:hover": {
            background: 'linear-gradient(to bottom, #b56824, #8a4514)'
        }
    },
    signUpBtn: {
        width: "fit-content",
        background: 'linear-gradient(to bottom, #e7c27e, #d8a95b)', /* parchment gradient */
        border: '2px solid #7a4a15', /* darker brown border */
        borderRadius: '8px',
        color: '#4b2a0a', /* rich dark brown text */
        fontFamily: 'Georgia, serif',
        fontSize: '24px',
        padding: '12px 40px',
        boxShadow: 'inset 0 0 5px #b37c3b, 0 2px 4px rgba(0, 0, 0, 0.2)',
        textShadow: '1px 1px rgba(255, 255, 255, 0.3)', /* subtle raised effect */
        cursor: 'pointer',
        transition: 'background 0.3s',

        "&:hover": {
            background: 'linear-gradient(to bottom, #f0cc8f, #e0b66c)'
        }
    }
})