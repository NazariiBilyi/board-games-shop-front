import AddShopItem from "../AddShopItem/AddShopItem.tsx";
import {ITab} from "../../components/TabsComponent/types.ts";

export const getAdminPanelTabs = () => {
    return[
        {
            index: 0,
            label: 'Add Item',
            Component: <AddShopItem />,
        }
    ] as ITab[]
}