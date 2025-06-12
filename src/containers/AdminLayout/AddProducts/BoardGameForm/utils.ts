import {FormInputForSave } from "./types.ts";
import {IItemPayload} from "@services/admin/types";

export const defaultValues = {
    name: '',
    type: '',
    price: '',
    availability: '',
    description: '',
    ageRestrictions: '',
    vendor: '',
    gameTime: '',
    numberOfPlayers: '',
    language: ''
}

export const transformBoardGame = (boardGame: FormInputForSave) => {
    return {
        ...boardGame,
        price: Number(boardGame?.price  ? boardGame?.price.replace(',', '.') : 0),
        availability: Boolean(boardGame.availability),
    } as IItemPayload
}