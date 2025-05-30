import * as React from "react";

export interface IImageData {
    src: string,
    title?: string
}

export interface IStandardImagesListProps {
    imageData: IImageData[]
    deleteImage: (title: string) => (event: React.MouseEvent<HTMLButtonElement>) => void
    selectImage: (title: string) => void
}