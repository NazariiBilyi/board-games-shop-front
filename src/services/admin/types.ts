// Enum-like type for item types
import {IGenericResponse} from "../types.ts";

export enum IItemType {
    BoardGame = 0,
    ComicBook = 1,
    Accessory = 2,
}

export interface IImageData{
    _id?: string,
    name: string,
    isTitle: boolean,
}

export interface IImages {
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
    images?: IImages,
    ageRestrictions: string,
    vendor: string,
}

export interface IBoardGame extends IShopItem {
    gameTime: string,
    numberOfPlayers: string,
    language: string
}

export interface IItemPayload {
    name: string,
    type: string,
    price: number,
    images: string,
    availability: boolean,
    description: string,
    ageRestrictions: string,
    vendor: string,
    language: string,
    numberOfPlayers: string,
    gameTime: string,
}

export type IItemEditPayload = Omit<IItemPayload, 'images'>;

export interface ICreateNewItemResponse extends IGenericResponse{
    itemId: string,
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
