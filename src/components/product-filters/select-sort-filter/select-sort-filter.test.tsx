import { render } from '@testing-library/react';
import { ESortProductsByPrice } from 'models/IProductsFilters';
import SelectSortFilter from './select-sort-filter-component';

describe('Select Sort Filter specs', () => {
    test('Test to check if components its rendering properly', () => {
      
        const options =
        [
            { id: 1, option: "Ordenar por:" },
            { id: 2, option: "Precio ascendente" },
            { id: 3, option: "Precio descendente" }
        ]

        //Arrange
        //Act
        const screen = render(
            <div data-testid="component">
                <SelectSortFilter
                    id={'sortFilter'}
                    options={options}
                    onChange={(e) => e.target}
                    defaultOption={ESortProductsByPrice.NOORDER}
                />
            </div>)

        const element = screen.getByTestId('component').firstChild.nodeName;

        //Assert
        expect(element).not.toBeNull();
        expect(screen.asFragment()).toMatchSnapshot();

    })
})

