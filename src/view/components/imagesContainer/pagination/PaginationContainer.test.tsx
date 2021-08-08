import { screen} from "@testing-library/react";
import React from "react";
import {PaginationContainer} from "./PaginationContainer";
import {renderWithRedux} from "../../../../utils/create-store-for-test";


describe('Pagination container', () => {
    test('The pagination container must be displayed with at least two buttons', () => {
        renderWithRedux(<PaginationContainer />)
        expect(screen.getByRole('navigation')).toBeInTheDocument()
        expect(screen.getAllByRole('button').length).toBe(2)
        expect(screen.getByRole('button', {name: "Go to previous page"})).toBeInTheDocument()
        expect(screen.getByRole('button', {name: "Go to next page"})).toBeInTheDocument()
    })
})