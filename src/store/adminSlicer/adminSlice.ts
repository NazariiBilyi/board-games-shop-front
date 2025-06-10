import {StateCreator} from "zustand/vanilla";
import {IAdminState, IGetItemByIdAndTypeParams} from "./types.ts";
import {AxiosResponse} from "axios";
import { ICreateNewItemResponse } from "../../services/admin/types.ts";
import {AdminService} from "../../services/admin/admin.ts";

export const adminSlice: StateCreator<IAdminState> = (set) => ({
    error: null,
    products: null,
    productForEdit: null,
    isLoading: false,
    setState: (newState) => {
        set(newState)
    },
    addNewProduct: async (params, callback): Promise<void>  => {
        set({error: null, isLoading: true});

        try {
            const response: AxiosResponse<ICreateNewItemResponse> = await AdminService.createNewItem(params.itemType.toString(), params.item);

            const itemData = response.data;

            set({isLoading: false});
            if(callback){
                callback(itemData.itemId);
            }

        }catch (e){
            if(e instanceof Error) set({ error: e.message, isLoading: false});
        }
    },
    updateProduct: async (params): Promise<void> => {
        set({error: null, isLoading: true});
        try {
            const { itemId, itemType, item} = params;

            await AdminService.updateItemByIdAndType(itemId, itemType, item)

            set({isLoading: false});
        } catch (e) {
            if(e instanceof Error) set({ error: e.message, isLoading: false});
        }

    },
    getItemByIdAndType: async (params: IGetItemByIdAndTypeParams): Promise<void> => {
        set({error: null, productForEdit: null, isLoading: true})

        try{
            const { itemType, itemId } = params;

            const response = await AdminService.getItemByIdAndType(itemId, itemType);

            set({
                productForEdit: response.data.boardGame,
                isLoading: false,
            })
        } catch (e) {
            if(e instanceof Error) set({error: e.message, productForEdit: null, isLoading: false})
        }
    },
    getItemsByType: async(params): Promise<void> => {
        set({error: null, isLoading: true})

        try{
            const { type } = params

            const response = await AdminService.getItemsByType(type)

            set({products: response.data.boardGames, isLoading: false})
        }catch (e) {
            if(e instanceof Error) set({error: e.message, isLoading: false})
        }
    },
    deleteItemByType: async(params): Promise<void> => {
        set({error: null, isLoading: true})

        try{
            const {type, itemId} = params

            await AdminService.deleteItemByType(type, itemId)
            set({
                isLoading: false
            })
        } catch (e) {
            if(e instanceof Error) set({error: e.message, isLoading: false})
        }
    }
})