import { rejects } from "assert";
import axios from "axios";
import IProduct from "models/IProduct";
import { resolve } from "path";
import API from "./API";

const endpoint = "/products.json";

/**
 * Service for get list products
 */
export const getAllProducts = (): Promise<IProduct[]> =>
    new Promise<IProduct[]>((resolve, reject) => {
        API()
            .get<IProduct[]>(`${endpoint}`)
            .then(
                (res) => {
                    resolve(res.data);
                    console.log(res.data)
                },
                (error) => {
                    reject(error);
                }
            );
    });

export default getAllProducts;

