import { render } from '@testing-library/react';
import { CrossIcon, LineIcon, SearchIcon } from './svg-icons.component';

describe('SVG Icons specs', () => {
    test('Test for Icons to check if are render properly', () => {
        //Act
        const screen = render(
            <>
                <div data-testid="searchIcon">
                    <SearchIcon
                        id={"searchIcon"}
                        className={'searchIcon'}
                        width={20}
                        height={20}
                    />
                </div>
                <div data-testid="lineIcon">
                    <LineIcon
                        id={"lineIcon"}
                        className={'lineIcon'}
                        width={20}
                        height={20}
                    />
                </div>
                <div data-testid="crossIcon">
                    <CrossIcon
                        id={"crossIcon"}
                        className={'crossIcon'}
                        width={20}
                        height={20}
                    />
                </div>
            </>
        )

        const searchIcon = screen.getByTestId('searchIcon').firstChild.nodeName;
        const lineIcon = screen.getByTestId('lineIcon').firstChild.nodeName;
        const crossIcon = screen.getByTestId('crossIcon').firstChild.nodeName;
        //Assert
        expect(searchIcon).not.toBeNull();
        expect(searchIcon).toEqual('svg')
        expect(screen.asFragment()).toMatchSnapshot();

        expect(lineIcon).not.toBeNull();
        expect(lineIcon).toEqual('svg')
        expect(screen.asFragment()).toMatchSnapshot();

        expect(crossIcon).not.toBeNull();
        expect(crossIcon).toEqual('svg')
        expect(screen.asFragment()).toMatchSnapshot();

    })
})
