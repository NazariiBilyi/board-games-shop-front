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

export interface IAddBoardGameProps {
    itemType: string
}