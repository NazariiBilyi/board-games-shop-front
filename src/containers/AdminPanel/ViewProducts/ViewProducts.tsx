import {Box} from "@mui/material";
import ViewShopItems from "../../../components/ViewShopItems/ViewShopItems.tsx";
import * as React from "react";

const ViewProducts: React.FC = () => {

    return (
        <Box>
            <ViewShopItems rows={[]} headCells={[]}  />
        </Box>
    )
}

export default ViewProducts;