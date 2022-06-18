import IProduct from 'models/IProduct';
import * as tools from './tools';
import { ESortProductsByPrice } from 'models/IProductsFilters'

describe('Tests for caculateDiscount function. ', () => {
    test('Should calculate correct discount(discount equal to 5) when pass price equals to 25 and discount equal 80', () => {
        // Arrange
        const price = 25;
        const discount = 80;
        // Act
        const result = tools.calculateDiscount(price, discount)
        // Assert
        expect(result).toEqual(5)
    })
    test('Should return 0 when discount is equal to 100, test for checkings nulls, undefined or NaN results', () => {
        // Arrange
        const price = 25;
        const discount = 100;
        // Act
        const result = tools.calculateDiscount(price, discount)
        // Assert
        expect(result).toEqual(0)
    })
    test('Should return price equal to 25 when discount is equal to 0, test for checkings nulls, undefined or NaN results', () => {
        // Arrange
        const price = 25;
        const discount = 0;
        // Act
        const result = tools.calculateDiscount(price, discount)
        // Assert
        expect(result).toEqual(25)
    })
})

describe('Tests for roundToTwo function. ', () => {
    test('Should round to two the price, that should be equal to 25.24', () => {
        // Arrange
        const price = 25.237234;
        // Act
        const result = tools.roundToTwo(price)
        // Assert
        expect(result).toEqual(25.24)
    })
})

describe('Tests for checkDiscountExist function. ', () => {
    test('Should check that product object have property discount, with price equal to 18.99 and discount equal to 20, and calculate final price, that should be equal to 15.191999999999998', () => {
        // Arrange
        const product: IProduct = {
            "id": 0,
            "name": "Polo manga corta estampada",
            "price": 18.99,
            "discount": 20,
            "colors": [
                "'rojo'",
                "'verde'",
                "'azúl'"
            ],
            "featuredImg": "https://json.ctrlj.es/mayoral/img/polo-azul-marino.jpg"
        };
        // Act
        const result = tools.checkDiscountExist(product)
        // Assert
        expect(result).toEqual(15.191999999999998)
    })
})

describe('Tests for checkDiscountExist function. ', () => {
    test('Should check that product object NOT have property discount,  not calling calculateDiscount, and return price that should be 18.99', () => {
        // Arrange
        const product: IProduct = {
            "id": 0,
            "name": "Polo manga corta estampada",
            "price": 18.99,
            "colors": [
                "'rojo'",
                "'verde'",
                "'azúl'"
            ],
            "featuredImg": "https://json.ctrlj.es/mayoral/img/polo-azul-marino.jpg"
        };
        // Act
        const calculateDiscount = jest.spyOn(tools, "calculateDiscount")
        const result = tools.checkDiscountExist(product)
        // Assert
        expect(calculateDiscount).toBeCalledTimes(0);
        expect(result).toEqual(product.price)
    })
})

describe('Tests for orderProductsByPrice function. ', () => {
    test('Should return 0, -1 and 1 depending of the option Parameter. ', () => {
        // Arrange
        const productA: IProduct = {
            "id": 0,
            "name": "Polo manga corta estampada",
            "price": 18.99,
            "discount": 20,
            "colors": [
                "'rojo'",
                "'verde'",
                "'azúl'"
            ],
            "featuredImg": "https://json.ctrlj.es/mayoral/img/polo-azul-marino.jpg"
        };
        const productB: IProduct = {
            "id": 1,
            "name": "Polo manga corta bandas",
            "price": 20.99,
            "colors": [
                "'rojo'",
                "'verde'",
                "'azúl'"
            ],
            "featuredImg": "https://json.ctrlj.es/mayoral/img/polo-blanco.jpg"
        }

        // Act
        const resultNoOrder = tools.orderProductsByPrice(productA, productB, ESortProductsByPrice.NOORDER)
        const resultOrderASC = tools.orderProductsByPrice(productA, productB, ESortProductsByPrice.ASC)
        const resultOrderDSC = tools.orderProductsByPrice(productA, productB, ESortProductsByPrice.DESC)

        // Assert

        expect(resultNoOrder).toEqual(0)
        expect(resultOrderASC).toEqual(-1)
        expect(resultOrderDSC).toEqual(1)

    })
})


describe('Tests for dataSortSearchResults function. ', () => {
    test('Should sort data correctly by price correctly.', () => {
        // Arrange
        const products: IProduct[] =
            [
                {
                    "id": 0,
                    "name": "Polo manga corta estampada",
                    "price": 18.99,
                    "discount": 20,
                    "colors": [
                        "'rojo'",
                        "'verde'",
                        "'azúl'"
                    ],
                    "featuredImg": "https://json.ctrlj.es/mayoral/img/polo-azul-marino.jpg"
                },
                {
                    "id": 1,
                    "name": "Polo manga corta bandas",
                    "price": 20.99,
                    "colors": [
                        "'rojo'",
                        "'verde'",
                        "'azúl'"
                    ],
                    "featuredImg": "https://json.ctrlj.es/mayoral/img/polo-blanco.jpg"
                },
                {
                    "id": 2,
                    "name": "Polo manga corta estampada blanco",
                    "price": 15.19,
                    "discount": 20,
                    "colors": [
                        "'rojo'",
                        "'verde'",
                        "'azúl'"
                    ],
                    "featuredImg": "https://json.ctrlj.es/mayoral/img/polo-lima.jpg"
                },
                {
                    "id": 3,
                    "name": "Polo manga corta miniestampado",
                    "price": 16.99,
                    "featuredImg": "https://json.ctrlj.es/mayoral/img/polo-negro.jpg"
                },
                {
                    "id": 4,
                    "name": "Polo manga corta estampada rojo",
                    "price": 25.99,
                    "discount": 20,
                    "colors": [
                        "'rojo'",
                        "'verde'",
                        "'azúl'"
                    ],
                    "featuredImg": "https://json.ctrlj.es/mayoral/img/polo-rojo.jpg"
                },
                {
                    "id": 5,
                    "name": "Polo manga corta estampada",
                    "price": 7.99,
                    "discount": 20,
                    "colors": [
                        "'rojo'",
                        "'verde'",
                        "'azúl'"
                    ],
                    "featuredImg": "https://json.ctrlj.es/mayoral/img/polo-azul-marino.jpg"
                },
                {
                    "id": 6,
                    "name": "Polo manga corta bandas",
                    "price": 14.99,
                    "colors": [
                        "'rojo'",
                        "'verde'",
                        "'azúl'"
                    ],
                    "featuredImg": "https://json.ctrlj.es/mayoral/img/polo-lima.jpg"
                },
                {
                    "id": 7,
                    "name": "Polo manga corta estampada blanco",
                    "price": 12.19,
                    "discount": 20,
                    "colors": [
                        "'rojo'",
                        "'verde'",
                        "'azúl'"
                    ],
                    "featuredImg": "https://json.ctrlj.es/mayoral/img/polo-blanco.jpg"
                },
                {
                    "id": 8,
                    "name": "Polo manga corta miniestampado",
                    "price": 11.99,
                    "featuredImg": "https://json.ctrlj.es/mayoral/img/polo-azul-marino.jpg"
                },
                {
                    "id": 9,
                    "name": "Polo manga corta estampada rojo",
                    "price": 17.99,
                    "discount": 20,
                    "colors": [
                        "'rojo'",
                        "'verde'",
                        "'azúl'"
                    ],
                    "featuredImg": "https://json.ctrlj.es/mayoral/img/polo-rojo.jpg"
                }
            ]

        // Act
        const resultNoOrderNoSearch = tools.dataSortSearchResults('', products, products, ESortProductsByPrice.NOORDER)
        const resultOrderASC = tools.dataSortSearchResults('b', products, products, ESortProductsByPrice.ASC)
        const resultOrderDSC = tools.dataSortSearchResults('blanco', products, products, ESortProductsByPrice.DESC)

        const expectedResultOrderASC =
            [{ "colors": ["'rojo'", "'verde'", "'azúl'"], "discount": 20, "featuredImg": "https://json.ctrlj.es/mayoral/img/polo-blanco.jpg", "id": 7, "name": "Polo manga corta estampada blanco", "price": 12.19 },
            { "colors": ["'rojo'", "'verde'", "'azúl'"], "discount": 20, "featuredImg": "https://json.ctrlj.es/mayoral/img/polo-lima.jpg", "id": 2, "name": "Polo manga corta estampada blanco", "price": 15.19 },
            { "colors": ["'rojo'", "'verde'", "'azúl'"], "featuredImg": "https://json.ctrlj.es/mayoral/img/polo-lima.jpg", "id": 6, "name": "Polo manga corta bandas", "price": 14.99 },
            { "colors": ["'rojo'", "'verde'", "'azúl'"], "featuredImg": "https://json.ctrlj.es/mayoral/img/polo-blanco.jpg", "id": 1, "name": "Polo manga corta bandas", "price": 20.99 }]
        const expectedResultOrderDSC = [{ "colors": ["'rojo'", "'verde'", "'azúl'"], "discount": 20, "featuredImg": "https://json.ctrlj.es/mayoral/img/polo-lima.jpg", "id": 2, "name": "Polo manga corta estampada blanco", "price": 15.19 },
        { "colors": ["'rojo'", "'verde'", "'azúl'"], "discount": 20, "featuredImg": "https://json.ctrlj.es/mayoral/img/polo-blanco.jpg", "id": 7, "name": "Polo manga corta estampada blanco", "price": 12.19 }]
        
        // Assert
        expect(resultNoOrderNoSearch).toEqual(products)
        expect(resultOrderASC).toEqual(expectedResultOrderASC)
        expect(resultOrderDSC).toEqual(expectedResultOrderDSC)

    })
})