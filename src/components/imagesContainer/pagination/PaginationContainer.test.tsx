import {createStore} from "redux";
import {rootReducer} from "../../../bll/store";
import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import React from "react";
import {PaginationContainer} from "./PaginationContainer";

const renderWithRedux = (
    component: any,
    { initialState, store = createStore(rootReducer, initialState) }: any = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>)
    }
}

describe('Pagination container', () => {
    test('The pagination container must be displayed with at least two buttons', () => {
        renderWithRedux(<PaginationContainer />)
        expect(screen.getByRole('navigation')).toBeInTheDocument()
        expect(screen.getAllByRole('button').length).toBe(2)
        expect(screen.getByRole('button', {name: "Go to previous page"})).toBeInTheDocument()
        expect(screen.getByRole('button', {name: "Go to next page"})).toBeInTheDocument()
    })
})