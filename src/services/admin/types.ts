// Enum-like type for item types
export enum IItemType {
    BoardGame = 0,
    ComicBook = 1,
    Accessory = 2,
}

// Inner object structure for the actual item
export interface IItemPayload {
    name: string;
    type: string;
    price: number;
    availability: boolean;
    description: string;
    ageRestrictions: string;
    vendor: string;
    language: string;
    numberOfPlayers: string;
    gameTime: string;
}

// Final payload to send to backend
export interface ICreateItemRequestData {
    itemType: IItemType;  // enum or number
    item: IItemPayload;
}

export interface IUploadImagesRequestData {
    itemId: string;
    images: any;
}

export interface ICreateNewItemResponse {
    message: string;
    itemId: string;
}

export interface IUploadImagesResponse {
    message: string;
    imagesId: string
}
