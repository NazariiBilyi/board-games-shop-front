import {IBoardGame, IItemPayload} from "../../services/admin/types.ts";

export interface IAddNewProductParams {
    item: IItemPayload,
    itemType: string,
}

export interface IUpdateProductParams {
    item: Partial<IItemPayload>,
    itemId: string,
    itemType: string,
}

export interface IGetItemByIdAndTypeParams {
    itemId: string;
    itemType: string;
}

export interface IAdminSliceState {
    admin: {
        products: null | IBoardGame[],
        productForEdit: null | IBoardGame,
        isLoading: boolean,
        getItemByIdAndType: (params: IGetItemByIdAndTypeParams) => void,
        updateProduct: (params: IUpdateProductParams, callback?: (itemId: string) => void) => void
        addNewProduct: (params: IAddNewProductParams, callback?: (itemId: string) => void) => void,
        getItemsByType: (params: {type: string}) => void,
        deleteItemByType: (params: {type: string, itemId: string}) => void,
    },
    updateAdminState: (state: Partial<IAdminSliceState['admin']>) => void;
}