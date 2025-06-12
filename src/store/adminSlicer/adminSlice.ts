import {StateCreator} from "zustand/vanilla";
import {IAdminSliceState, IGetItemByIdAndTypeParams} from "./types.ts";
import {AxiosResponse} from "axios";
import { ICreateNewItemResponse } from "@services/admin/types.ts";
import {AdminService} from "@services/admin/admin.ts";
import {IErrorSliceState} from "@store/errorSlice/types.ts";

export const adminSlice: StateCreator<
    IAdminSliceState & IErrorSliceState,
    [],
    [],
    IAdminSliceState
> = (set, get) => ({
    admin: {
        products: null,
        productForEdit: null,
        isLoading: false,
        addNewProduct: async (params, callback): Promise<void>  => {
            get().setAppError(null)
            get().updateAdminState({isLoading: true})
            try {
                const response: AxiosResponse<ICreateNewItemResponse> = await AdminService.createNewItem(params.itemType.toString(), params.item);

                const itemData = response.data;

                get().updateAdminState({isLoading: false});
                if(callback){
                    callback(itemData.itemId);
                }

            }catch (e){
                if(e instanceof Error) get().setAppError(e.message)
                get().updateAdminState({ isLoading: false});
            }
        },
        updateProduct: async (params): Promise<void> => {
            get().setAppError(null)
            get().updateAdminState({isLoading: true});

            try {
                const { itemId, itemType, item} = params;

                await AdminService.updateItemByIdAndType(itemId, itemType, item)

                get().updateAdminState({isLoading: false});
            } catch (e) {
                if(e instanceof Error) get().setAppError(null);
                get().updateAdminState({isLoading: false});
            }

        },
        getItemByIdAndType: async (params: IGetItemByIdAndTypeParams): Promise<void> => {
            get().setAppError(null)
            get().updateAdminState({productForEdit: null, isLoading: true})

            try{
                const { itemType, itemId } = params;

                const response = await AdminService.getItemByIdAndType(itemId, itemType);

                get().updateAdminState({
                    productForEdit: response.data.boardGame,
                    isLoading: false,
                })
            } catch (e) {
                if(e instanceof Error) get().setAppError( e.message)
                get().updateAdminState({productForEdit: null, isLoading: false})
            }
        },
        getItemsByType: async(params): Promise<void> => {
            get().setAppError(null)
            get().updateAdminState({isLoading: true})

            try{
                const { type } = params

                const response = await AdminService.getItemsByType(type)

                get().updateAdminState({products: response.data.boardGames, isLoading: false})
            }catch (e) {
                console.log(e)
                if(e instanceof Error) get().setAppError(e.message)
                get().updateAdminState({isLoading: false})
            }
        },
        deleteItemByType: async(params): Promise<void> => {
            get().setAppError(null)
            get().updateAdminState({isLoading: true})

            try{
                const {type, itemId} = params

                await AdminService.deleteItemByType(type, itemId)
                get().updateAdminState({
                    isLoading: false
                })
            } catch (e) {
                if(e instanceof Error) get().setAppError(e.message)
                get().updateAdminState({isLoading: false})
            }
        }
    },
    updateAdminState: (partialAdmin) =>
        set((state) => ({
            admin: {
                ...state.admin,
                ...partialAdmin,
            },
        })),
})