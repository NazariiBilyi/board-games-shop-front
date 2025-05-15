import {IItemPayload} from "../../services/admin/types.ts";

export interface IAddNewProductParams {
    item: IItemPayload,
    itemType: number,
}

export interface IAdminState {
    error: null | string,
    addNewProduct: (params: IAddNewProductParams, callback?: (itemId: string) => void) => void,
    uploadItemImages: (formData: FormData) => void
}