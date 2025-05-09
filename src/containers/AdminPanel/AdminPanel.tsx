import {Box} from "@mui/material";
import TabsComponent from "../../components/TabsComponent/TabsComponent.tsx";
import {getAdminPanelTabs} from "./utils.tsx";

const AdminPanel = () => {
    const tabs = getAdminPanelTabs()

    return(
        <Box>
            <TabsComponent tabs={tabs} />
        </Box>
    )
}

export default AdminPanel;