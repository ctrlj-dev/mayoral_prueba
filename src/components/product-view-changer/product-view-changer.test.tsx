import { fireEvent, render } from '@testing-library/react';
import ProductViewChanger from './product-view-changer-component';

describe('ProductView Changer specs', () => {
    test('Test to check if components its rendering properly', () => {
        //Arrange
        //Act
        const screen = render(
            <div data-testid="component">
                <ProductViewChanger
                    viewMoreProductEvent={() => true}
                    viewLessProductEvent={() => false}
                />
            </div>)

        const element = screen.getByTestId('component').firstChild.nodeName;
        const elementButton = screen.getAllByRole('button');
 
        //Assert
        expect(element).not.toBeNull();
        expect(elementButton).not.toBeNull();
        expect(screen.asFragment()).toMatchSnapshot();

    })
})

