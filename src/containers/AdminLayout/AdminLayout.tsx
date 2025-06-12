import {Outlet} from "react-router";
import {Box, Stack} from "@mui/material";
import useCombinedStore from "@store/store";
import AdminHeader from "./AdminHeader/AdminHeader.tsx";
import {useStyles} from "./styles";
import AdminSidebar from "./AdminSidebar/AdminSidebar.tsx";

const AdminLayout = () => {
    const token = useCombinedStore((state) => state.auth.token)
    const classes = useStyles()

    return(
        <Box className={classes.root}>
            {token && <AdminHeader />}
            <Stack flexDirection='row' className={classes.contentWrapper}>
                <AdminSidebar />
                <Box className={classes.content}>
                    <Outlet />
                </Box>
            </Stack>

        </Box>
    )
}

export default AdminLayout
