import { Box, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import {ChangeEvent, useState} from "react";
import BoardGameForm from "./BoardGameForm/BoardGameForm.tsx";
import { products } from '../utils/getProductTypes.ts'
import {IItemType} from "@services/admin/types.ts";
import {FormInputForSave} from "./BoardGameForm/types.ts";
import {defaultValues, transformBoardGame} from "./BoardGameForm/utils.ts";
import useCombinedStore from "@store/store.ts";
import {AdminService} from "@services/admin/admin.ts";
import {StandardImageList} from "@components/StandardImagesList/StandardImagesList.tsx";
import {IImageData} from "@components/StandardImagesList/types.ts";
import {Loader} from "@components/Loader/Loader.tsx";

const AddProducts = () => {

    const [productType, setProductType] = useState<string>('0')
    const [images, setImages] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<IImageData[]>([]);

    const addBoardGame = useCombinedStore(state => state.admin.addNewProduct)
    const isLoading = useCombinedStore(state => state.admin.isLoading);

    const handleChange = (event: SelectChangeEvent) => {
        setProductType(event.target.value as string);
    };

    const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.length && event.target.files.length > 0) {
            const files = Array.from(event.target.files);
            const previews =  files.map(file => ({
                src: URL.createObjectURL(file),
                title: file.name as string,
                isTitle: false,
            }))
            setImages(prevValue => [...prevValue, ...files]);
            setImagePreviews(prevValue => [...prevValue, ...previews])
        }
    }

    const onSetImageAsTitle = (title: string) => {
        setImagePreviews(prevState => prevState.map(img => {
            if(img.title === title) {
                img.isTitle = true
                return img
            }
            return {...img, isTitle: false}
        }))
    }

    const onDeleteImage = (title: string) => () => {
        setImagePreviews(prevImages => prevImages.filter(img => img.title !== title));
        setImages(prevImages => prevImages.filter(img => img.name !== title))
    }

    const onUploadImages = async () => {
        const titleImage = imagePreviews.find(img => img.isTitle);
        if(!titleImage) {
            return {
                imagesId: null
            };
        }
        try {
            const formDataImages = new FormData();
            images.forEach((file) => formDataImages.append("images", file));
            formDataImages.append('titleImageIndex', images.findIndex((img) => img.name === titleImage.title).toString())
            const itemImagesRes = await AdminService.uploadItemImages(formDataImages)
            return {
                imagesId: itemImagesRes.data.imagesId
            };
        }catch (e) {
            console.log(e)
            return {
                imagesId: null
            };
        }
    };

    const onSaveProduct = async (data: FormInputForSave) => {
        switch (Number(productType)) {
            case IItemType.BoardGame: {
                const { imagesId } = await onUploadImages();
                if(imagesId) {
                    const boardGame = transformBoardGame(data);
                    boardGame.images = imagesId as string;
                    addBoardGame({
                        item: boardGame,
                        itemType: productType
                    })
                    setImages([])
                    setImagePreviews([])
                }
                return;
            }
            default:
                return;
        }

    }

    const onRenderAddProductForm = () => {
        switch (Number(productType)) {
            case IItemType.BoardGame:
                return <>
                        <BoardGameForm
                            disableSubmitButton={false}
                            defaultValues={defaultValues}
                            isEdit={false}
                            save={onSaveProduct}/>
                        <StandardImageList
                            imageData={imagePreviews}
                            selectFiles={onFileChange}
                            deleteImage={onDeleteImage}
                            selectImage={onSetImageAsTitle} />
                        </>
            default:
                return <Box>No product type selected</Box>
        }
    }

    if(isLoading) {
        return <Loader />
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