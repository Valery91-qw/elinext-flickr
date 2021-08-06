import {render, screen} from "@testing-library/react";
import {Navigation} from "./Navigation";
import {Router} from "react-router-dom";
import {createMemoryHistory} from 'history'

describe('Navigation', () => {
    test('snapshot test navigation', () => {
        const history = createMemoryHistory()
        const {asFragment} = render(
            <Router history={history}>
                <Navigation />
            </Router>

        )
        // @ts-ignore
        expect(asFragment(<Navigation />)).toMatchSnapshot()
    })
    test('', () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <Navigation />
            </Router>
        )
        expect(screen.getByRole('menu')).toBeInTheDocument()
        expect(screen.getAllByRole('menuitem')[0]).toBeInTheDocument()
        expect(screen.getAllByRole('menuitem')[1]).toBeInTheDocument()
    })
})