import { screen} from "@testing-library/react";
import {BookmarkButton} from "./BookmarkButton";
import {renderWithRedux} from "../../../../../utils/create-store-for-test";


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