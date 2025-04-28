import { styled } from '@mui/material/styles';
import {Button, ButtonProps} from "@mui/material";

const SubmitButton = styled(Button)<ButtonProps>(() => ({
    background: 'linear-gradient(to bottom, #a65c1e, #7c3f12)', /* gradient */
    border: '2px solid #5a2e0c',
    borderRadius: '8px',
    color: '#f5deb3',
    fontFamily: "Uncial Antiqua",
    fontSize: '24px',
    padding: '12px 40px',
    boxShadow: 'inset 0 0 5px #522e0f, 0 2px 5px rgba(0, 0, 0, 0.4)',
    textShadow: '1px 1px #000',
    cursor: 'pointer',
    transition: 'background 0.3s',

    "&:hover": {
        background: 'linear-gradient(to bottom, #b56824, #8a4514)'
    }
}))

export default SubmitButton;