import {IImageData} from "../../../../components/StandardImagesList/types.ts";

export interface IFormInput {
    name: string,
    type: string,
    price: string,
    titleImage: File | null | string,
    images?: File | null | string,
    availability: string,
    description: string,
    ageRestrictions: string,
    vendor: string,
    gameTime: string,
    numberOfPlayers: string,
    language: string
}

export interface IAddBoardGameProps {
    defaultValues: IFormInput,
    save: (data: IFormInput, titleImage: File, images: File[]) => void,
    isEdit: boolean,
    imagesPreviews: IImageData[]
}