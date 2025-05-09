import Header from "../Home/Header/Header.tsx";
import {Outlet} from "react-router";
import {Box} from "@mui/material";
import useCombinedStore from "../../store/store.ts";

const AdminLayout = () => {
    const token = useCombinedStore((state) => state.token)

    return(
        <Box>
            {token && <Header />}
            <Outlet />
        </Box>
    )
}

export default AdminLayout
