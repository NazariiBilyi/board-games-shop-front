import {StateCreator} from "zustand/vanilla";
import {IAdminState} from "./types.ts";
import {AxiosResponse} from "axios";
import {ICreateNewItemResponse} from "../../services/admin/types.ts";
import {AdminService} from "../../services/admin/admin.ts";

export const adminSlice: StateCreator<IAdminState> = (set) => ({
    error: null,
    addNewProduct: async (params, callback): Promise<void>  => {
        try {
            set({error: 'null'})

            const response: AxiosResponse<ICreateNewItemResponse> = await AdminService.createNewItem(params);

            const itemData = response.data;

            if(callback){
                callback(itemData.itemId);
            }

        }catch (e){
            console.log(e)
            set({ error: 'Something went wrong'})
        }
    },
    uploadItemImages: async(params): Promise<void> => {
        try {
            set({error: 'null'})

           await AdminService.uploadItemImages(params);

        }catch (e){
            console.log(e)
            set({error: 'Something went wrong'})
        }
    }
})