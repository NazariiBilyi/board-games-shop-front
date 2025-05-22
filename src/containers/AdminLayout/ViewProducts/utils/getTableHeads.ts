import {IItemType} from "../../../../services/admin/types.ts";
import {IHeadCell} from "../../../../components/TableComponent/types.ts";

export const getTableHeads = (productType: number): IHeadCell[] => {

    switch (productType) {
        case IItemType.BoardGame:
            return [
                {
                    id: Math.random(),
                    name: 'Name'
                },
                {
                    id: Math.random(),
                    name: 'Price'
                },
                {
                    id: Math.random(),
                    name: 'Availability'
                },
                {
                    id: Math.random(),
                    name: 'Actions'
                },
            ]
        default:
            return []
    }
}