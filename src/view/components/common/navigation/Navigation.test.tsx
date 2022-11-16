import {render, screen} from "@testing-library/react";
import {Navigation} from "./Navigation";
import {MemoryRouter} from "react-router-dom";

//TODO fix lines under ts-ignore

describe('Navigation', () => {
    test('snapshot test navigation', () => {
        const history = '/elinext-flickr#/search'
        const {asFragment} = render(
            <MemoryRouter initialEntries={[history]}>
                <Navigation />
            </MemoryRouter>

        )
        // @ts-ignore
        expect(asFragment(<Navigation />)).toMatchSnapshot()
    })
    test('The navigation component should render a menu with two items', () => {
        const history = '/elinext-flickr#/search'
        render(
            <MemoryRouter initialEntries={[history]}>
                <Navigation />
            </MemoryRouter>
        )
        expect(screen.getByRole('menu')).toBeInTheDocument()
        expect(screen.getAllByRole('menuitem')[0]).toBeInTheDocument()
        expect(screen.getAllByRole('menuitem')[1]).toBeInTheDocument()
    })
})