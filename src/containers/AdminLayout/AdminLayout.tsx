import {Outlet} from "react-router";
import {Box} from "@mui/material";
import useCombinedStore from "../../store/store.ts";
import AdminHeader from "./AdminHeader/AdminHeader.tsx";
import {useStyles} from "./styles";
import AdminSidebar from "./AdminSidebar/AdminSidebar.tsx";

const AdminLayout = () => {
    const token = useCombinedStore((state) => state.token)
    const classes = useStyles()

    return(
        <Box className={classes.root}>
            {token && <AdminHeader />}
            <AdminSidebar />
            <Box sx={{marginTop: '20px', marginLeft: '260px'}}>
                <Outlet />
            </Box>
        </Box>
    )
}

export default AdminLayout
