import {Box, Drawer, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {useNavigate} from "react-router";
import {useStyles} from "./styles";

const navigation = [
    {name: 'Products', href: '/admin-panel/products'},
    {name: 'Add shopItem', href: '/admin-panel/add-product'},
]

const AdminSidebar = () => {

    const classes = useStyles()

    const navigate = useNavigate();

    const onGoToNavigationPage = (href: string) => () => {
        navigate(href);
    }

    return(
        <Drawer
            variant="permanent"
            className={classes.drawer}
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