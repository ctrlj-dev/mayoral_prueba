import { render } from '@testing-library/react';
import ProductSearchFilter from './product-search-filter.component';

describe('ProductSearchFilter specs', () => {
    test('Test if component render correctly', () => {
        //Act
        const screen = render(
                <ProductSearchFilter
                    id={"1"}
                    onChange={(e) => e.target}
                    placeholder={"Buscar"}
                    value={'test'}
                />

        )

        const elementValue = screen.getByDisplayValue('test');

        //Assert
        expect(elementValue).not.toBeNull();
        expect(screen.asFragment()).toMatchSnapshot();

    })
})