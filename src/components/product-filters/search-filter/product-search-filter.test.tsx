import { render } from '@testing-library/react';
import { useState } from 'react';
import ProductSearchFilter from './product-search-filter.component';

describe('ProductSearchFilter specs', () => {
    test('Test if component render correctly', () => {
        //Act
        const { getByDisplayValue, asFragment } = render(
                <ProductSearchFilter
                    id={"1"}
                    onChange={(e) => e.target}
                    placeholder={"Buscar"}
                    value={'test'}
                />

        )

        const elementValue = getByDisplayValue('test');

        //Assert
        expect(elementValue).not.toBeNull();

        expect(asFragment()).toMatchSnapshot();

    })
})