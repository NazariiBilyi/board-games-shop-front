import {Box, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, Stack} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import * as React from "react";
import { products } from '../utils/getProductTypes.ts'
import {useEffect, useState, useMemo} from "react";
import useCombinedStore from "../../../store/store.ts";
import {useStyles} from "./styles";
import TableComponent from "../../../components/TableComponent/TableComponent.tsx";
import {getTableHeads} from "./utils/getTableHeads.ts";
import {getTableRows} from "./utils/getTableRows.ts";
import {IRow} from "../../../components/TableComponent/types.ts";
import {useNavigate} from "react-router";
import {IShopItem} from "./types.ts";

const ViewProducts: React.FC = () => {

    const classes = useStyles()
    const navigate = useNavigate();

    const [productType, setProductType] = useState<number>(0)

    const productsByType= useCombinedStore(state => state.products)

    const getItemsByType = useCombinedStore(state => state.getItemsByType);

    const deleteItemByType = useCombinedStore(state => state.deleteItemByType)

    useEffect(() => {
        if(productType !== undefined) {
            const params = {
                type: productType.toString()
            }
            getItemsByType(params)
        }
    }, [getItemsByType, productType]);

    const headCells = useMemo(() => {
        return getTableHeads(productType as number)
    },[productType])

    const rows = useMemo(() => {
        return getTableRows(productsByType as IShopItem[], productType as number)
    },[productType, productsByType])

    const handleChange= (event: SelectChangeEvent) => {
        setProductType(Number(event.target.value));
    };

    const onEditProduct = (productId: string) => () => {
        navigate(`/admin-panel/edit-product/${productId}/${productType}`)
    }

    const onDeleteProduct = (productId: string) => () => {
        deleteItemByType({
            itemId: productId,
            type: productType?.toString() as string
        })
    }

    const onGetActions = (row: IRow) => (
        <Stack flexDirection='row' alignItems='center' justifyContent='flex-start'>
            <IconButton onClick={onEditProduct(row.id as string)}>
                <EditIcon />
            </IconButton>
            <IconButton onClick={onDeleteProduct(row.id as string)}>
                <DeleteIcon />
            </IconButton>
        </Stack>
    )

    return (
        <Box className={classes.root}>
            <Box className={classes.dropdown}>
                <InputLabel id="demo-simple-select-label">Please select product type</InputLabel>
                <Select
                    fullWidth
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={handleChange}
                    value={productType?.toString() || ''}>
                    {products.map((product) => (
                        <MenuItem key={product.value} value={product.value}>{product.name}</MenuItem>))}
                </Select>
            </Box>
            <Box className={classes.tableWrapper}>
                <TableComponent rows={rows} headCells={headCells} actions={onGetActions} />
            </Box>
        </Box>
    )
}

export default ViewProducts;