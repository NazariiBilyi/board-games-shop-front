import { styled } from '@mui/material/styles';
import {Card, CardProps} from "@mui/material";
import parchmentTexture from "../../assets/images/parchment-texture.png";

const FormCard = styled(Card)<CardProps>(() => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: `url(${parchmentTexture})`,
    backgroundSize: "cover",
    borderRadius: '15px',
    padding: "20px",
    fontFamily: "Uncial Antiqua",
    color: "#3b1f0f"
}))

export default FormCard;