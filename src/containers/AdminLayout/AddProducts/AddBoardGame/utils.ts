import {IFormInput} from "./types.ts";

export const transformBoardGame = (boardGame: IFormInput) => {
    return {
        ...boardGame,
        price: Number(boardGame.price.replace(',', '.')),
        availability: Boolean(boardGame.availability),
    }
}