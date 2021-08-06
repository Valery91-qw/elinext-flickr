import {ImagesContainer} from "./ImagesContainer";
import {render, screen} from "@testing-library/react";
import {createStore} from "redux";
import {rootReducer} from "../../bll/store";
import {Provider} from "react-redux";
import {createMemoryHistory} from "history";
import {Router} from "react-router-dom";

jest.mock('../../dal/axios')


const renderWithRedux = (
    component: any,
    { initialState, store = createStore(rootReducer, initialState)}: any = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>)
    }
}

describe('ImagesContainer', () => {
    test('If in component ImagesContainer in props is empty array and path = /search', () => {
        const history = createMemoryHistory()
        history.push('/search')
        renderWithRedux(
            <Router history={history}>
                <ImagesContainer images={[]} />
            </Router>
        )

        const searchInput = screen.getByRole('textbox') as HTMLInputElement

        expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()
        expect(screen.getByText(/No images here.Would you try to search for anything else ?/)).toBeInTheDocument()
        expect(searchInput).toBeInTheDocument()
    })
})