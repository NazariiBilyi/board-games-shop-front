import {makeStyles} from "@mui/styles";
import parchmentTexture from '../../assets/images/parchment-texture.png'

export const useStyles = makeStyles({
    banner: {
        fontFamily: "'Uncial Antiqua', serif",
        fontSize: "2rem",
        letterSpacing: "1px",
    },
    container: {
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
})