import IProduct from "models/IProduct"

const API = process.env.NEXT_PUBLIC_URL_FAKE_MAYORAL
const endpoint = "/products.json"

/**
 * Service for get all products from API
 */
export const getAllProducts = async () : Promise<{ Product: IProduct[] }> => {
    const response = await fetch(API + endpoint)
    const jsonData = await response.json()
    return jsonData
}