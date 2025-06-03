import {IFormInput} from "./types.ts";

export const defaultValues = {
    name: '',
    type: '',
    price: '',
    titleImage: null,
    images: null,
    availability: '',
    description: '',
    ageRestrictions: '',
    vendor: '',
    gameTime: '',
    numberOfPlayers: '',
    language: ''
}

export const transformBoardGame = (boardGame: IFormInput) => {
    return {
        ...boardGame,
        price: Number(boardGame.price.replace(',', '.')),
        availability: Boolean(boardGame.availability),
    }
}