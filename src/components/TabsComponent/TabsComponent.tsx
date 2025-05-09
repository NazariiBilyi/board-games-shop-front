import {ITabPanelProps, ITabsProps} from "./types.ts";
import {Box, Tab, Tabs} from "@mui/material";
import * as React from "react";

const CustomTabPanel = (props: ITabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

const a11yProps = (index: number) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TabsComponent:React.FC<ITabsProps> = ({tabs}) => {
    const [activeTab, setActiveTab] = React.useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    return(
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={activeTab} onChange={handleChange} aria-label="basic tabs example">
                    {tabs.map((tab) => (
                        <Tab label={tab.label} {...a11yProps(tab.index)} key={tab.index} />
                    ))}
                </Tabs>
            </Box>
            {tabs.map((tab) => (
                <CustomTabPanel value={activeTab} index={tab.index} key={tab.index}>
                    {tab.Component}
                </CustomTabPanel>))
            }
        </Box>
    );
}

export default TabsComponent;