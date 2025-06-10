export interface IFormInput {
    name: string,
    type: string,
    price: string,
    availability: string,
    description: string,
    ageRestrictions: string,
    vendor: string,
    gameTime: string,
    numberOfPlayers: string,
    language: string
}

export type FormInputForSave = IFormInput | Partial<IFormInput>;

export interface IAddBoardGameProps {
    defaultValues: IFormInput,
    save: (data: FormInputForSave) => void,
    isEdit: boolean,
    disableSubmitButton: boolean
}