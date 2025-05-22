import * as React from "react";

export interface IRow {
    [key: string]: string | number | React.ReactNode
}

export interface IHeadCell {
    name: string,
    id: number,
}

export interface IViewShopItemsProps {
    rows: IRow[],
    headCells: IHeadCell[],
    actions?:(row: IRow) => React.ReactNode,
}