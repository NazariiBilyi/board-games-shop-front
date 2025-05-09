import * as React from "react";

export interface ITabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export interface ITab {
    index: number;
    label: string;
    Component: React.ReactNode;
}

export interface ITabsProps {
    tabs: ITab[]
}