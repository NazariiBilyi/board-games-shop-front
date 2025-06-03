import {IBoardGame, IItemPayload} from "../../services/admin/types.ts";

export interface IAddNewProductParams {
    item: IItemPayload,
    itemType: string,
}

export interface IGetItemByIdAndTypeParams {
    itemId: string;
    itemType: string;
}

export interface IAdminState {
    error: null | string,
    products: null | IBoardGame[],
    productForEdit: null | IBoardGame,
    getItemByIdAndType: (params: IGetItemByIdAndTypeParams) => void,
    updateProduct: (params: IAddNewProductParams, callback?: (itemId: string) => void) => void
    addNewProduct: (params: IAddNewProductParams, callback?: (itemId: string) => void) => void,
    getItemsByType: (params: {type: string}) => void,
    deleteItemByType: (params: {type: string, itemId: string}) => void,
}