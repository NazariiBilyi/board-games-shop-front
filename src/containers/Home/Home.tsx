import {Box, Container} from "@mui/material";
import {useStyles} from "./styles";
import {ParchmentBox} from "../../components/styled/ParchmentBox.tsx";


const Home = () => {
    const classes = useStyles();



    return(
        <Box>
            <Container className={classes.container}>
                <ParchmentBox className={classes.banner} >
                    Enchanted pics for the month
                </ParchmentBox>
            </Container>
        </Box>

    )
}

export default Home;