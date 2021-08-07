import {createStore} from "redux";
import {rootReducer} from "../../../../bll/store";
import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {BookmarkButton} from "./BookmarkButton";

const renderWithRedux = (
    component: any,
    { initialState, store = createStore(rootReducer, initialState) }: any = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>)
    }
}

describe('BookmarkButton', () => {
    test('in this case the component should be displayed with a "remove!" button', () => {
        renderWithRedux(<BookmarkButton inBookmark={true} addToBookmark={jest.fn()} removeToBookmark={jest.fn()} />)
        expect(screen.getByRole('button')).toBeInTheDocument()
        expect(screen.getByText(/remove!/)).toBeInTheDocument()
    })
    test('in this case the component should be displayed with a "bookmark it!" button', () => {
        renderWithRedux(<BookmarkButton inBookmark={false} addToBookmark={jest.fn()} removeToBookmark={jest.fn()} />)
        expect(screen.getByRole('button')).toBeInTheDocument()
        expect(screen.getByText(/bookmark it!/)).toBeInTheDocument()
    })
})