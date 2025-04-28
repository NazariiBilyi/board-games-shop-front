import { styled } from '@mui/material/styles';
import {Card, CardProps} from "@mui/material";

const FormCard = styled(Card)<CardProps>(() => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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
}))

export default FormCard;