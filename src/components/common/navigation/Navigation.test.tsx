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
        expect(asFragment(<Navigation />)).toMatchSnapshot()
    })
    test("in the nav component should be displayed element with test-data attribute", () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <Navigation />
            </Router>

        )
       expect(screen.getByTestId("nav-link")).toBeInTheDocument()
    })
})