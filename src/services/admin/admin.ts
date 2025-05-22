import {
    ICreateNewItemResponse,
    ICreateItemRequestData,
    IUploadImagesResponse, IBoardGamesResponse
} from "./types.ts";
import {AxiosResponse} from "axios";
import http from "../axios.ts";
import {IGenericResponse} from "../types.ts";

export const AdminService = {
    async createNewItem (data: ICreateItemRequestData): Promise<AxiosResponse<ICreateNewItemResponse>> {
        return await http.put('/admin/add-new-item', data)
    },

    async uploadItemImages(formData: FormData): Promise<AxiosResponse<IUploadImagesResponse>> {
        return await http.put('/admin/upload-images', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
    },

    async getItemsByType(type: string): Promise<AxiosResponse<IBoardGamesResponse>> {
        return await http.get(`/admin/get-items/${type}`)
    },

    async deleteItemByType(type: string, itemId: string): Promise<AxiosResponse<IGenericResponse>> {
        return await http.delete(`/admin/delete-item/${type}/${itemId}`)
    }
}