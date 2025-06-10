import {
    ICreateNewItemResponse,
    IUploadImagesResponse, IBoardGamesResponse, IItemPayload, IBoardGameResponse
} from "./types.ts";
import {AxiosResponse} from "axios";
import http from "../axios.ts";
import {IGenericResponse} from "../types.ts";

export const AdminService = {
    async createNewItem (itemType: string, data: IItemPayload): Promise<AxiosResponse<ICreateNewItemResponse>> {
        return await http.put(`/admin/item/${itemType}`, data)
    },

    async uploadItemImages(formData: FormData): Promise<AxiosResponse<IUploadImagesResponse>> {
        return await http.put(`/admin/item/images`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
    },

    async updateItemByIdAndType(itemId: string, itemType: string, data: Partial<IItemPayload>): Promise<AxiosResponse<IGenericResponse>> {
        return await http.put(`/admin/item/${itemId}/${itemType}`, data)
    },

    async updateItemImages(collectionId: string, formData: FormData): Promise<AxiosResponse<IGenericResponse>> {
        return await http.put(`/images/img/${collectionId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
    },

    async getItemByIdAndType(itemId: string, itemType: string): Promise<AxiosResponse<IBoardGameResponse>> {
        return await http.get(`/admin/item/${itemId}/${itemType}`)
    },

    async getItemsByType(type: string): Promise<AxiosResponse<IBoardGamesResponse>> {
        return await http.get(`/admin/items/${type}`)
    },

    async deleteItemByType(type: string, itemId: string): Promise<AxiosResponse<IGenericResponse>> {
        return await http.delete(`/admin/item/${type}/${itemId}`)
    }
}