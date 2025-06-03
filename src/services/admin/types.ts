// Enum-like type for item types
import {IGenericResponse} from "../types.ts";

export enum IItemType {
    BoardGame = 0,
    ComicBook = 1,
    Accessory = 2,
}

export interface IImageData{
    _id?: string,
}

export interface IImage {
    _id?: string,
    images: IImageData[]
}

export interface IShopItem {
    id?: string,
    name: string,
    type: string,
    price: number,
    availability: boolean,
    description: string,
    images?: IImage,
    ageRestrictions: string,
    vendor: string,
}

export interface IBoardGame extends IShopItem {
    gameTime: string,
    numberOfPlayers: string,
    language: string
}

// Inner object structure for the actual item
export interface IItemPayload {
    name: string,
    type: string,
    titleImage: string | File | null,
    price: number,
    availability: boolean,
    description: string,
    ageRestrictions: string,
    vendor: string,
    language: string,
    numberOfPlayers: string,
    gameTime: string,
}

export interface IUploadImagesRequestData {
    itemId: string,
    images: any,
}

export interface ICreateNewItemResponse extends IGenericResponse{
    itemId: string,
}

export interface IUploadTitleImageResponse extends IGenericResponse{
    imageId: string,
}

export interface IUploadImagesResponse extends IGenericResponse{
    imagesId: string,
}

export interface IBoardGameResponse extends IGenericResponse{
    boardGame: IBoardGame,
}

export interface IBoardGamesResponse extends IGenericResponse{
    boardGames: IBoardGame[],
}
