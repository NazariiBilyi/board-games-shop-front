import {useParams} from "react-router";
import {ChangeEvent, useEffect, useMemo, useState} from "react";
import BoardGameForm from "../AddProducts/BoardGameForm/BoardGameForm.tsx";
import { IItemType } from "../../../services/admin/types.ts";
import {Box} from "@mui/material";
import {IEditProductParams} from "./types.ts";
import useCombinedStore from "../../../store/store.ts";
import {boardGameForEditSchema, transformProductForEdit, transformToDefaultValues} from "./utils.ts";
import {IImageData} from "../../../components/StandardImagesList/types.ts";
import { IFormInput } from "../AddProducts/BoardGameForm/types.ts";
import {StandardImageList} from "../../../components/StandardImagesList/StandardImagesList.tsx";
import {AdminService} from "../../../services/admin/admin.ts";

const EditProducts = () => {
    const [images, setImages] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<IImageData[]>([]);

    const params = useParams<IEditProductParams>();
    const productForEdit = useCombinedStore(state => state.productForEdit);
    const getProductById = useCombinedStore(state => state.getItemByIdAndType)
    const updateProduct = useCombinedStore(state => state.updateProduct)
    const {id, type} = params;

    useEffect(() => {
        if (id && type) {
            getProductById({itemId: id, itemType: type})
        }
    }, [id, type, getProductById]);

    useEffect(() => {
        if(productForEdit) {
            const previews = productForEdit?.images?.images.map((image) => {
                return {
                    src: `http://localhost:8080/images/img/${productForEdit?.images?._id}/${image._id}`,
                    title: image._id,
                    isTitle: image.isTitle,
                    isNew: false
                }
            })
            if(previews) setImagePreviews(previews)
        }
    }, [productForEdit]);

    const defaultValues = useMemo(() => {
        if(productForEdit) return transformToDefaultValues(boardGameForEditSchema, productForEdit)
    }, [productForEdit])

    const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.length && event.target.files.length > 0) {
            const files = Array.from(event.target.files);
            const previews =  files.map(file => ({
                src: URL.createObjectURL(file),
                title: file.name as string,
                isTitle: false,
                isNew: true,
            }))
            setImages(prevValue => [...prevValue, ...files]);
            setImagePreviews(prevValue => [...prevValue, ...previews])
        }
    }

    const onDeleteImage = (title: string) => () => {
        setImagePreviews(prevImages => prevImages.filter(img => img.title !== title));
        setImages(prevImages => prevImages.filter(img => img.name !== title))
    }

    const onSetImageAsTitle = (title: string) => {
        setImagePreviews(prevState => prevState.map(img => {
            if(img.title === title) {
                img.isTitle = true
                return img
            }
            return img
        }))
    }

    const onEditProduct = async (data: Partial<IFormInput>) => {
        const params = {
            itemId: id as string,
            itemType: type as string,
            item: transformProductForEdit(data)
        }

        const imagesFormData = new FormData();
        if(images) {
            images.forEach(img => imagesFormData.append('images', img))
        }

        productForEdit?.images?.images.forEach(img => {
            if(!imagePreviews.find(imgPreview => imgPreview.title === img._id)) {
                imagesFormData.append("imagesForDelete", img?._id as string);
            }
        })
        await AdminService.updateItemImages(productForEdit?.images?._id as string, imagesFormData)
        updateProduct(params)
    }

    const onDisableSubmitButton = ():boolean => {
        return !imagePreviews.find(img => img.isTitle)
    }


    const onRenderProductForm = () => {
        switch (Number(type)) {
            case IItemType.BoardGame:
                return <>
                    <BoardGameForm
                        disableSubmitButton={onDisableSubmitButton()}
                        isEdit={true}
                        defaultValues={defaultValues as IFormInput}
                        save={onEditProduct} />
                    <StandardImageList
                        imageData={imagePreviews}
                        selectFiles={onFileChange}
                        deleteImage={onDeleteImage}
                        selectImage={onSetImageAsTitle} />
                </>
            default: return
        }
    }

    return(
        <Box>
            {onRenderProductForm()}
        </Box>
    )

}

export default EditProducts;
