import IProduct from "models/IProduct";
import { ESortProductsByPrice } from "models/IProductsFilters";

export const calculateDiscount = (price: number, discount: number): number => price - (price * discount / 100);

export const roundToTwo = (number: number): number => Math.round(number * 100) / 100

export const checkDiscountExist = (product: IProduct): number => product.discount ? calculateDiscount(product.price, product.discount) : product.price

export const orderProducts = (a: IProduct, b: IProduct, option: string): number => {
    switch (option) {
        case ESortProductsByPrice.DESC:
            return checkDiscountExist(a) > checkDiscountExist(b) ? -1 : 1
        case ESortProductsByPrice.ASC:
            return checkDiscountExist(a) > checkDiscountExist(b) ? 1 : -1
        default:
            return 0;
    }
}