import {
    ICreateNewItemResponse,
    IUploadImagesResponse, IBoardGamesResponse, IItemPayload, IUploadTitleImageResponse
} from "./types.ts";
import {AxiosResponse} from "axios";
import http from "../axios.ts";
import {IGenericResponse} from "../types.ts";

export const AdminService = {
    async createNewItem (itemType: string, data: IItemPayload): Promise<AxiosResponse<ICreateNewItemResponse>> {
        return await http.put(`/admin/item/${itemType}`, data)
    },

    async uploadTitleImage (formData: FormData): Promise<AxiosResponse<IUploadTitleImageResponse>> {
        return await http.put('/admin/item/image', formData)
    },

    async uploadItemImages(formData: FormData): Promise<AxiosResponse<IUploadImagesResponse>> {
        return await http.put(`/admin/item/images`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
    },

    async getItemsByType(type: string): Promise<AxiosResponse<IBoardGamesResponse>> {
        return await http.get(`/admin/items/${type}`)
    },

    async deleteItemByType(type: string, itemId: string): Promise<AxiosResponse<IGenericResponse>> {
        return await http.delete(`/admin/item/${type}/${itemId}`)
    }
}