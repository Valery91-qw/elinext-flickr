import {createStore} from "redux";
import {rootReducer} from "../bll/store";
import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import App from "./App";
import {createMemoryHistory} from "history";
import {Router} from "react-router-dom";

const renderWithRedux = (
    component: any,
    { initialState, store = createStore(rootReducer, initialState) }: any = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>)
    }
}

describe('App component', () => {
    test('The master page should display header, footer, links, input and placeholder', () => {
        const history = createMemoryHistory()
        renderWithRedux(
            // @ts-ignore
            <Router history={history}>
            <App />
            </Router>
        )
        expect(screen.getByText(/Image Finder/)).toBeInTheDocument()
        expect(screen.getByText(/Copyrights/)).toBeInTheDocument()
        expect(screen.getAllByRole('link').length).toBe(2)
        expect(screen.getByRole('textbox')).toBeInTheDocument()
        expect(screen.getByText(/No images here.Would you try to search for anything else ?/)).toBeInTheDocument()
    })
})