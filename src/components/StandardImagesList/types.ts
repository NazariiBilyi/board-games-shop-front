import * as React from "react";
import {ChangeEvent} from "react";

export interface IImageData {
    src: string,
    title?: string,
    isTitle: boolean,
    isNew?: boolean
}

export interface IStandardImagesListProps {
    imageData: IImageData[],
    deleteImage: (title: string) => (event: React.MouseEvent<HTMLButtonElement>) => void,
    selectImage: (title: string) => void,
    selectFiles: (event: ChangeEvent<HTMLInputElement>) => void,
}