import { styled } from '@mui/material/styles';
import {Button, ButtonProps} from "@mui/material";

const NavigationButton = styled(Button)<ButtonProps>(() => ({
    background: 'linear-gradient(to bottom, #e7c27e, #d8a95b)', /* parchment gradient */
    border: '2px solid #7a4a15', /* darker brown border */
    borderRadius: '8px',
    color: '#4b2a0a', /* rich dark brown text */
    fontFamily: "Uncial Antiqua",
    fontSize: '24px',
    padding: '12px 40px',
    boxShadow: 'inset 0 0 5px #b37c3b, 0 2px 4px rgba(0, 0, 0, 0.2)',
    textShadow: '1px 1px rgba(255, 255, 255, 0.3)', /* subtle raised effect */
    cursor: 'pointer',
    transition: 'background 0.3s',

    "&:hover": {
        background: 'linear-gradient(to bottom, #f0cc8f, #e0b66c)'
    }
}))

export default NavigationButton;