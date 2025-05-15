import {Box} from "@mui/material";
import Header from "../Home/Header/Header.tsx";
import { Outlet } from "react-router";
import useCombinedStore from "../../store/store.ts";
import {useStyles} from "./styles";

const Layout = () => {
    const token = useCombinedStore((state) => state.token)
    const classes = useStyles()

    return(
        <Box className={classes.background}>
            {token && <Header />}
            <Outlet />
        </Box>
    )
}

export default Layout;