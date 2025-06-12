import {useNavigate} from "react-router";
import {useStyles} from "./styles";
import useCombinedStore from "@store/store.ts";
import { useState, MouseEvent } from "react";
import {AppBar, Box, IconButton, Menu, MenuItem, Stack, Toolbar, Typography} from "@mui/material";
import {UserRoles} from "@store/authSlicer/types.ts";

const Header = () => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const userRole = useCombinedStore((state) => state.auth.userRole);

    const navigate = useNavigate();
    const clearToken = useCombinedStore((state) => state.auth.clearToken)

    const handleMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        localStorage.removeItem('accessToken');
        clearToken()
        navigate('/login')
        handleClose()
    }

    const goToAdminPanel = () => {
        navigate('/admin-panel')
        handleClose()
    }

    return(
        <Box>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Stack className={classes.stack} flexDirection="row" justifyContent="flex-end">
                        <IconButton
                            className={classes.menuButton}
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                        >
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            {UserRoles.ADMIN === userRole && <MenuItem onClick={goToAdminPanel}>Admin Panel</MenuItem>}
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={logout}>Logout</MenuItem>
                        </Menu>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Typography className={classes.title}>
                Board Games Shop
            </Typography>
        </Box>
    )
}

export default Header;