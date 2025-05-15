import {ITab} from "../../components/TabsComponent/types.ts";
import ViewBoardGames from "./ViewProducts/ViewProducts.tsx";

export const getAdminPanelTabs = () => {
    return[
        {
            index: 0,
            label: 'Board Games',
            Component: <ViewBoardGames />,
        }
    ] as ITab[]
}