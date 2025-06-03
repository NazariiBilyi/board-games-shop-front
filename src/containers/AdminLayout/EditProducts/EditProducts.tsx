import {useParams} from "react-router";
import {useEffect, useMemo} from "react";
import BoardGameForm from "../AddProducts/BoardGameForm/BoardGameForm.tsx";
import { IItemType } from "../../../services/admin/types.ts";
import {Box} from "@mui/material";
import {IEditProductParams} from "./types.ts";
import useCombinedStore from "../../../store/store.ts";
import {boardGameForEditSchema, transformProductForEdit} from "./utils.ts";
import {IImageData} from "../../../components/StandardImagesList/types.ts";
import { IFormInput } from "../AddProducts/BoardGameForm/types.ts";

const EditProducts = () => {
    const params = useParams<IEditProductParams>();
    const productForEdit = useCombinedStore(state => state.productForEdit);
    const getProductById = useCombinedStore(state => state.getItemByIdAndType)
    const {id, type} = params;

    useEffect(() => {
        if (id && type) {
            getProductById({itemId: id, itemType: type})
        }
    }, [id, type, getProductById]);

    const imagesPreviews = useMemo(() => {
        if (productForEdit) {
            return productForEdit?.images?.images.map((image) => {
                return {
                    src: `http://localhost:8080/images/img/${productForEdit?.images?._id}/${image._id}`,
                    title: image._id
                }
            })
        }
        return []
    }, [productForEdit]) as IImageData[]

    const onEditProduct = (data: IFormInput) => {

    }


    const onRenderProductForm = () => {
        switch (Number(type)) {
            case IItemType.BoardGame:
                return <BoardGameForm
                            isEdit={true}
                            imagesPreviews={imagesPreviews}

                            defaultValues={transformProductForEdit(boardGameForEditSchema, productForEdit || {})}
                            save={onEditProduct} />
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
