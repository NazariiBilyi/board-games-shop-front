import {StateCreator} from "zustand/vanilla";
import {IAdminSliceState, IGetItemByIdAndTypeParams} from "./types.ts";
import {AxiosError, AxiosResponse} from "axios";
import { ICreateNewItemResponse } from "@services/admin/types.ts";
import {AdminService} from "@services/admin/admin.ts";
import {INotificationState} from "@store/notificationSlice/types.ts";

export const adminSlice: StateCreator<
    IAdminSliceState & INotificationState,
    [],
    [],
    IAdminSliceState
> = (set, get) => ({
    admin: {
        products: null,
        productForEdit: null,
        isLoading: false,
        addNewProduct: async (params, callback): Promise<void>  => {
            get().clearNotification()
            get().updateAdminState({isLoading: true})
            try {
                const response: AxiosResponse<ICreateNewItemResponse> = await AdminService.createNewItem(params.itemType.toString(), params.item);

                const itemData = response.data;

                get().updateAdminState({isLoading: false});
                if(callback){
                    callback(itemData.itemId);
                }

                get().setNotification({message: itemData.message, variant: 'success'})

            }catch (e){
                if(e instanceof AxiosError && e.response) get().setNotification({message: e.response?.data?.message, variant: 'error'})
                else if(e instanceof Error) get().setNotification({message: e.message, variant: 'error'})
                get().updateAdminState({isLoading: false});
            }
        },
        updateProduct: async (params): Promise<void> => {
            get().clearNotification()
            get().updateAdminState({isLoading: true});

            try {
                const { itemId, itemType, item} = params;

                const response = await AdminService.updateItemByIdAndType(itemId, itemType, item)

                get().updateAdminState({isLoading: false});

                get().setNotification({message: response.data.message, variant: 'success'})
            } catch (e) {
                if(e instanceof AxiosError && e.response) get().setNotification({message: e.response?.data?.message, variant: 'error'})
                else if(e instanceof Error) get().setNotification({message: e.message, variant: 'error'})
                get().updateAdminState({isLoading: false});
            }

        },
        getItemByIdAndType: async (params: IGetItemByIdAndTypeParams): Promise<void> => {
            get().clearNotification()
            get().updateAdminState({productForEdit: null, isLoading: true})

            try{
                const { itemType, itemId } = params;

                const response = await AdminService.getItemByIdAndType(itemId, itemType);

                get().updateAdminState({
                    productForEdit: response.data.boardGame,
                    isLoading: false,
                })

                get().setNotification({message: response.data.message, variant: 'success'})
            } catch (e) {
                if(e instanceof AxiosError && e.response) get().setNotification({message: e.response?.data?.message, variant: 'error'})
                else if(e instanceof Error) get().setNotification({message: e.message, variant: 'error'})
                get().updateAdminState({productForEdit: null, isLoading: false})
            }
        },
        getItemsByType: async(params): Promise<void> => {
            get().clearNotification()
            get().updateAdminState({isLoading: true})

            try{
                const { type } = params

                const response = await AdminService.getItemsByType(type)

                get().updateAdminState({products: response.data.boardGames, isLoading: false})
            }catch (e) {
                if(e instanceof AxiosError && e.response) get().setNotification({message: e.response?.data?.message, variant: 'error'})
                else if(e instanceof Error) get().setNotification({message: e.message, variant: 'error'})
                get().updateAdminState({products: [], isLoading: false})
            }
        },
        deleteItemByType: async(params): Promise<void> => {
            get().clearNotification()
            get().updateAdminState({isLoading: true})

            try{
                const {type, itemId} = params

                const response = await AdminService.deleteItemByType(type, itemId)
                get().updateAdminState({
                    isLoading: false
                })

                get().admin.getItemsByType({
                    type
                })

                get().setNotification({message: response?.data?.message, variant: 'success'})
            } catch (e) {
                if(e instanceof AxiosError && e.response) get().setNotification({message: e.response?.data?.message, variant: 'error'})
                else if(e instanceof Error) get().setNotification({message: e.message, variant: 'error'})
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