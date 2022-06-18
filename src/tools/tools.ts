import IProduct from "models/IProduct";
import { ESortProductsByPrice } from "models/IProductsFilters";

/**
 * Calculate discount on products
 * @param price number ,
 * @param discount number 
 */
export const calculateDiscount = (price: number, discount: number): number => price - (price * discount / 100);

/**
 * Round number to two decimals.
 * @param price number 
*/
export const roundToTwo = (price: number): number => Math.round(price * 100) / 100

/**
 * Checke if discount exist as a object property, and apply it.
 * @param product IProduct 
*/
export const checkDiscountExist = (product: IProduct): number => product.discount ? calculateDiscount(product.price, product.discount) : product.price

/**
 * Sort products by price
 * @param a IProduct
 * @param b IProduct
 * @param option string
*/
export const orderProductsByPrice = (a: IProduct, b: IProduct, option: string): number => {
    switch (option) {
        case ESortProductsByPrice.DESC:
            return checkDiscountExist(a) > checkDiscountExist(b) ? -1 : 1
        case ESortProductsByPrice.ASC:
            return checkDiscountExist(a) > checkDiscountExist(b) ? 1 : -1
        default:
            return 0;
    }
}

/**
 * Function to filter products by search and sort by pricefilter
 * @param searchTerms string ,
 * @param data IProduct[] ,
 * @param sortOptions string ,
*/
export const dataSortSearchResults = (searchTerms: string, dataWithFilter: IProduct[], data: IProduct[], sortOptions: string) => !searchTerms ? data.concat().sort((a: IProduct, b: IProduct) =>
    orderProductsByPrice(a, b, sortOptions)
) :
    dataWithFilter.filter(product =>
        product.name.toLowerCase().includes(searchTerms.toLocaleLowerCase())
    ).concat().sort((a, b) => orderProductsByPrice(a, b, sortOptions))
