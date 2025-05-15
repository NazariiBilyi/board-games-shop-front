import {Box, Drawer, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {useNavigate} from "react-router";

const drawerWidth = 240;

const navigation = [
    {name: 'Products', href: '/admin-panel/products'},
    {name: 'Add shopItem', href: '/admin-panel/add-product'},
]

const AdminSidebar = () => {

    const navigate = useNavigate();

    const onGoToNavigationPage = (href: string) => () => {
        navigate(href);
    }

    return(
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', marginTop: '65px' },
            }}
        >
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {navigation.map((nav) => (
                        <ListItem key={nav.name} disablePadding>
                            <ListItemButton onClick={onGoToNavigationPage(nav.href)}>
                                <ListItemText primary={nav.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}

export default AdminSidebar