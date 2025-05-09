import {makeStyles} from "@mui/styles";
import addGame from "../../assets/images/addGame.png";

export const useStyles = makeStyles({
    card: {
        minWidth: '414px',
        minHeight: '621px',
    },
    cardHeader: {
        backgroundImage: `url(${addGame})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: '245px',
    },
})