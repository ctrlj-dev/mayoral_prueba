import { render } from '@testing-library/react';
import FilterContainer from './filter-container.component';

describe('FilterContainer specs', () => {
    test('test to check if container display his children properly', () => {
        //Arrange
        //Act
        const screen = render(<FilterContainer><p>filter1</p><p>filter2</p></FilterContainer>)

        const children1 = screen.getByText('filter1');
        const children2 = screen.getByText('filter2');

        expect(children1).not.toBeNull()
        expect(children2).not.toBeNull()

        expect(screen.asFragment()).toMatchSnapshot();

        //Assert
    })
})


