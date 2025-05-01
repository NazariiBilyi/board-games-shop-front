import Header from "./Header/Header.tsx";
import {Box, Container} from "@mui/material";
import {useStyles} from "./styles";
import {ParchmentBox} from "../../components/styled/ParchmentBox.tsx";


const Home = () => {
    const classes = useStyles();

    const token = localStorage.getItem('accessToken')

    return(
        <Box>
            {token && <Header/>}
            <Container className={classes.container}>
                <ParchmentBox className={classes.banner} >
                    Enchanted pics for the month
                </ParchmentBox>
            </Container>
        </Box>

    )
}

export default Home;