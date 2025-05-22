import {IShopItem} from "../types.ts";
import {IItemType} from "../../../../services/admin/types.ts";

export const getTableRows = (products: IShopItem[], productType: number) => {
    switch (productType){
        case IItemType.BoardGame:
            return products.map(product => (
                {
                    id: product._id,
                    name: product.name,
                    price: product.price,
                    availability: product.availability ? 'Available' : 'Not Available'
                }
            ))
        default:
            return []
    }
}