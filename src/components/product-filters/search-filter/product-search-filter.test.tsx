import { render } from '@testing-library/react';
import ProductSearchFilter from './product-search-filter.component';

describe('ProductCard specs', () => {
    test('It Should get the value and the OnChange value (should be equals)', () => {

        //Act
        const {getByDisplayValue, asFragment } = render(
            <ProductSearchFilter
                id={"1"}
                onChange={(e) => console.log(e.target)}
                placeholder={"Buscar"}
                value={'test'}
            />)

        const elementValue = getByDisplayValue('test');
        const elementOnChange = getByDisplayValue("test");

        //Assert
        expect(elementValue).not.toBeNull();
        expect(elementOnChange).not.toBeNull();

        expect(asFragment()).toMatchSnapshot();

    })
})

