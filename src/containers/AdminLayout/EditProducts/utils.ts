import {IFormInput} from "../AddProducts/BoardGameForm/types.ts";


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

export const transformProductForEdit = (
    productSchema: Record<string, any>,
    product: Record<string, any>
) => {
    return Object.keys(productSchema).reduce((acc, key) => {
        if (key in product) {
            acc[key] = product[key];
        }
        return acc;
    }, {} as IFormInput);
}