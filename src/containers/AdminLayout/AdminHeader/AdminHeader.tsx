import {AppBar, Box, Button, Stack, Toolbar, Typography} from "@mui/material";
import useCombinedStore from "@store/store.ts";

const AdminHeader = () => {
    const token = useCombinedStore((state) => state.auth.token)

    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Stack flexDirection='row' alignItems='center' justifyContent='space-between'>
                    <Typography padding='0 20px' variant='h6'>
                        ADMIN PANEL
                    </Typography>
                    <Toolbar>
                        {token && <Button color="inherit">Logout</Button>}
                    </Toolbar>
                </Stack>
            </AppBar>
        </Box>
    )
}

export default AdminHeader;