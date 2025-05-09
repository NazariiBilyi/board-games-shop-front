import {Box} from "@mui/material";
import Header from "../Home/Header/Header.tsx";
import { Outlet } from "react-router";
import useCombinedStore from "../../store/store.ts";

const Layout = () => {
    const token = useCombinedStore((state) => state.token)
    console.log(token)

    return(
        <Box>
            {token && <Header />}
            <Outlet />
        </Box>
    )
}

export default Layout;