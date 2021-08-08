import {screen} from "@testing-library/react";
import {SearchField} from "./SearchField";
import userEvent from "@testing-library/user-event";
import React from "react";
import {renderWithRedux} from "../../../utils/create-store-for-test";


describe('Search field',  () => {
    test('The text that the user enters should be visible on the screen.',  () => {
        renderWithRedux(<SearchField />)
        const input = screen.getByRole('textbox')
        expect(screen.queryByDisplayValue('hello')).toBeNull()
        userEvent.type(input, 'hello')
        expect(screen.getByDisplayValue('hello')).toBeInTheDocument()
    })
})