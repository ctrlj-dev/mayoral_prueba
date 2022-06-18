import ProductCardComponent from './product-card.component';
import { render } from '@testing-library/react';
import IProduct from 'models/IProduct';
import React from 'react';

describe('ProductCardComponent specs', () => {
    test('It should display all the properties need by the component', () => {
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

        //Arrange
        const featuredImg = 'https://json.ctrlj.es/mayoral/img/polo-azul-marino.jpg';
        //Act
        const { getByText } = render(
            <ProductCardComponent
                id={product.id}
                name={product.name}
                discount={product.discount}
                price={product.price}
                featuredImg={product.featuredImg}
                colors={product.colors}
            />)

        const elementName = getByText('Polo manga corta estampada');
        expect(elementName).not.toBeNull();
        expect(elementName.tagName).toEqual('H2')

        //Assert
    })
}) 