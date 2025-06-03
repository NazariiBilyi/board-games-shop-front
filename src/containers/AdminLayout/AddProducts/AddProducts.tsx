import { Box, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import {useState} from "react";
import BoardGameForm from "./BoardGameForm/BoardGameForm.tsx";
import { products } from '../utils/getProductTypes.ts'
import {IItemType} from "../../../services/admin/types.ts";
import {IFormInput} from "./BoardGameForm/types.ts";
import {defaultValues, transformBoardGame} from "./BoardGameForm/utils.ts";
import useCombinedStore from "../../../store/store.ts";
import {AdminService} from "../../../services/admin/admin.ts";

const AddProducts = () => {

    const [productType, setProductType] = useState<string>('0')

    const addBoardGame = useCombinedStore(state => state.addNewProduct)

    const handleChange = (event: SelectChangeEvent) => {
        setProductType(event.target.value as string);
    };

    const onUploadImages = async (file: File, images: File[]) => {
        if(!file) {
            return {
                titleId: null,
                imagesId: null
            };
        }
        try {
            const formDataTitleImage = new FormData();
            formDataTitleImage.append("image", file);
            const formDataImages = new FormData();
            images.forEach((file) => formDataImages.append("images", file));
            const [titleImageRes, itemImagesRes] = await Promise.all([
                AdminService.uploadTitleImage(formDataTitleImage),
                AdminService.uploadItemImages(formDataImages)
            ])
            return {
                titleId: titleImageRes.data.imageId,
                imagesId: itemImagesRes.data.imagesId
            };
        }catch (e) {
            console.log(e)
            return {
                titleId: null,
                imagesId: null
            };
        }
    };

    const onSaveProduct = async (data: IFormInput, titleImage: File, images: File[]) => {
        switch (Number(productType)) {
            case IItemType.BoardGame: {
                const { titleId, imagesId } = await onUploadImages(titleImage, images);
                const boardGame = transformBoardGame(data);
                boardGame.titleImage = titleId as string;
                boardGame.images = imagesId as string;
                addBoardGame({
                    item: boardGame,
                    itemType: productType
                })
                return;
            }
            default:
                return;
        }

    }

    const onRenderAddProductForm = () => {
        switch (Number(productType)) {
            case IItemType.BoardGame:
                return <BoardGameForm
                            defaultValues={defaultValues}
                            isEdit={false}
                            save={onSaveProduct}
                            imagesPreviews={[]}/>
            default:
                return <Box>No product type selected</Box>
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