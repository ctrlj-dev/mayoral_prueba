export default interface IProduct {
    id: number,
    name: string,
    price: number,
    discount?: number,
    colors?: string[]
    featuredImg: string
}