import {render, screen} from "@testing-library/react";
import {SearchField} from "./SearchField";
import {createStore} from "redux";
import {rootReducer} from "../../../bll/store";
import {Provider} from "react-redux";
import userEvent from "@testing-library/user-event";
import React from "react";

const renderWithRedux = (
    component: any,
    { initialState, store = createStore(rootReducer, initialState) }: any = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>)
    }
}

describe('Search field',  () => {
    test('The text that the user enters should be visible on the screen.',  () => {
        renderWithRedux(<SearchField />)
        const input = screen.getByRole('textbox')
        expect(screen.queryByDisplayValue('hello')).toBeNull()
        userEvent.type(input, 'hello')
        expect(screen.getByDisplayValue('hello')).toBeInTheDocument()
    })
})