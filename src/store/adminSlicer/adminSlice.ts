import {StateCreator} from "zustand/vanilla";
import {IAdminState, IGetItemByIdAndTypeParams} from "./types.ts";
import {AxiosResponse} from "axios";
import { ICreateNewItemResponse } from "../../services/admin/types.ts";
import {AdminService} from "../../services/admin/admin.ts";

export const adminSlice: StateCreator<IAdminState> = (set) => ({
    error: null,
    products: null,
    productForEdit: null ,
    addNewProduct: async (params, callback): Promise<void>  => {
        try {
            set({error: null})

            const response: AxiosResponse<ICreateNewItemResponse> = await AdminService.createNewItem(params.itemType.toString(), params.item);

            const itemData = response.data;

            if(callback){
                callback(itemData.itemId);
            }

        }catch (e){
            set({ error: 'Something went wrong'})
        }
    },
    updateProduct: async (params): Promise<void> => {

    },
    getItemByIdAndType: async (params: IGetItemByIdAndTypeParams): Promise<void> => {
        try{
            set({error: null})

            const { itemType, itemId } = params;

            const response = await AdminService.getItemByIdAndType(itemId, itemType);

            set({
                productForEdit: response.data.boardGame
            })

        } catch (e) {
            set({error: 'Something went wrong'})
        }
    },
    getItemsByType: async(params): Promise<void> => {
        try{
            set({error: null})

            const { type } = params

            const response = await AdminService.getItemsByType(type)

            set({products: response.data.boardGames})
        }catch (e) {
            set({error: 'Something went wrong'})
        }
    },
    deleteItemByType: async(params): Promise<void> => {
        try{
            set({error: null})

            const {type, itemId} = params

            await AdminService.deleteItemByType(type, itemId)
        } catch (e) {
            set({error: "Something went wrong"})
        }
    }
})