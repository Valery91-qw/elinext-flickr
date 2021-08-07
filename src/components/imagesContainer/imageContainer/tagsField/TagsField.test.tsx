import {createStore} from "redux";
import {rootReducer} from "../../../../bll/store";
import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {TagsField} from "./TagsField";

const renderWithRedux = (
    component: any,
    { initialState, store = createStore(rootReducer, initialState) }: any = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>)
    }
}

describe('TagsArea', () => {
    test('the component should display input', () => {
        renderWithRedux(<TagsField setTags={jest.fn()}/>)
        expect(screen.getByRole('textbox')).toBeInTheDocument()
    })
})