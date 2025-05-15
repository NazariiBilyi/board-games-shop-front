import {
    ICreateNewItemResponse,
    ICreateItemRequestData,
    IUploadImagesResponse
} from "./types.ts";
import {AxiosResponse} from "axios";
import http from "../axios.ts";

export const AdminService = {
    async createNewItem (data: ICreateItemRequestData): Promise<AxiosResponse<ICreateNewItemResponse>> {
        return await http.put<ICreateNewItemResponse>('/admin/add-new-item', data)
    },

    async uploadItemImages(formData: FormData): Promise<AxiosResponse<IUploadImagesResponse>> {
        return await http.put<IUploadImagesResponse>('/admin/upload-images', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
    }
}