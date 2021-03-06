import { render } from '@testing-library/react';
import IProduct from 'models/IProduct';
import ProductCardComponent from './product-card.component';

describe('ProductCard specs', () => {
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

        //Act
        const screen = render(
            <ProductCardComponent
                id={product.id}
                name={product.name}
                discount={product.discount}
                price={product.price}
                featuredImg={product.featuredImg}
                colors={product.colors}
            />)

        const elementName = screen.getByText('Polo manga corta estampada');
        const elementDiscount = screen.getByText("(-20%)");
        const elementPrice = screen.getByText(18.99);
        const elementFeaturedImg = screen.getByAltText("Polo manga corta estampada");
        const elemenentcolors = screen.getByText('más colores');

        //Assert
        expect(elementName).not.toBeNull();
        expect(elementDiscount).not.toBeNull();
        expect(elementPrice).not.toBeNull();
        expect(elementFeaturedImg).not.toBeNull();
        expect(elemenentcolors).not.toBeNull();

        expect(elementName.tagName).toEqual('H2')
        expect(elementDiscount.tagName).toEqual('SPAN')
        expect(elementPrice.tagName).toEqual('P')
        expect(elementFeaturedImg.tagName).toEqual('IMG')
        expect(elemenentcolors.tagName).toEqual('P')

        expect(screen.asFragment()).toMatchSnapshot();

    })
})

