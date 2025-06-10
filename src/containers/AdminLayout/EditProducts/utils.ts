import {IFormInput} from "../AddProducts/BoardGameForm/types.ts";
import {IBoardGame, IItemEditPayload} from "../../../services/admin/types.ts";

export const boardGameForEditSchema = {
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

export const transformToDefaultValues = (
    productSchema: Record<keyof IFormInput, string>,
    product: IBoardGame
): IFormInput => {
    return (Object.keys(productSchema) as (keyof IFormInput)[]).reduce((acc, key) => {
        if (key in product) {
            acc[key] = <string>product[key].toString()!;
        }
        return acc;
    }, {} as IFormInput);
};

export const transformProductForEdit = (
    product: Partial<IFormInput>
): Partial<IItemEditPayload> => {
    return {
        ...product,
        price: Number(product?.price  ? product?.price.replace(',', '.') : 0),
        availability: Boolean(product.availability),
    }
};