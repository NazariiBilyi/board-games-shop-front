import { Box, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import {useState} from "react";
import AddBoardGame from "./AddBoardGame/AddBoardGame.tsx";
import { products } from '../utils/getProductTypes.ts'

const AddProducts = () => {
    // const classes = useStyles();


    const [productType, setProductType] = useState<string>('0')

    const handleChange = (event: SelectChangeEvent) => {
        setProductType(event.target.value as string);
    };

    const onRenderAddProductForm = () => {
        switch (productType) {
            case '0': return <AddBoardGame itemType={productType} />
        }
    }

    return(
        <Box>
            <Box sx={{ maxWidth: 200, marginBottom: '20px' }}>
                <InputLabel id="demo-simple-select-label">Please select product type</InputLabel>
                <Select
                    fullWidth
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={handleChange}
                    value={productType}>
                    {products.map((product) => (
                        <MenuItem key={product.value} value={product.value}>{product.name}</MenuItem>))}
                </Select>
            </Box>
            {onRenderAddProductForm()}
        </Box>
    )
}

export default AddProducts;