import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Typography
} from "@mui/material";
import {IViewShopItemsProps} from "./types.ts";
import * as React from "react";
import {useStyles} from "./styles";

const TableComponent: React.FC<IViewShopItemsProps> = ({rows, headCells, actions}) => {

    const classes = useStyles()

    if(rows?.length === 0){
        return (<Typography className={classes.noItemsPrompt}>
            The are no items
        </Typography>)
    }

    return(
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {headCells?.map((head) => (<TableCell key={head.id} align="left">{head.name}</TableCell>))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows?.map((row) => (
                            <TableRow
                                key={row.name as string}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {Object.keys(row).map(key => key !== 'id' && <TableCell key={key} align="left">{row[key]}</TableCell>)}
                                {actions && <TableCell align="left">
                                    {actions(row)}
                                    </TableCell>}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    )
}

export default TableComponent;