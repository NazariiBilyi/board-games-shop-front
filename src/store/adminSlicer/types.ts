import {IBoardGame, IItemPayload} from "../../services/admin/types.ts";

export interface IAddNewProductParams {
    item: IItemPayload,
    itemType: number,
}

export interface IAdminState {
    error: null | string,
    products: IBoardGame[],
    addNewProduct: (params: IAddNewProductParams, callback?: (itemId: string) => void) => void,
    uploadItemImages: (formData: FormData) => void,
    getItemsByType: (params: {type: string}) => void,
    deleteItemByType: (params: {type: string, itemId: string}) => void,
}