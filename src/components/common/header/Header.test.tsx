import {render, screen, fireEvent} from "@testing-library/react";
import {Header} from "./Header";

describe('Header', () => {
    test('header snapshot',  () => {
        const { asFragment } = render(<Header />)
        // @ts-ignore
        expect(asFragment(<Header />)).toMatchSnapshot()
    })
    test('In component header must be to elements with role the button and banner', () => {
        render(<Header />)
        expect(screen.getByRole('button')).toBeInTheDocument()
        expect(screen.getByRole('banner')).toBeInTheDocument()
    })
    test('If the button is clicked in the header, the login component is displayed', () => {
        render(<Header />)
        expect(screen.queryByText(/Workpiece/)).toBeNull()
        fireEvent.click(screen.getByRole('button'))
        expect(screen.getByText(/Workpiece/)).toBeInTheDocument()
    })
    test('If the button in the modal window is clicked, the modal window will close.', () => {
     render(<Header />)
     fireEvent.click(screen.getByRole('button'))
     expect(screen.getByRole('button', {name: ''})).toBeInTheDocument()
     fireEvent.click(screen.getByRole('button', {name: ''}))
     expect(screen.queryByText(/Workpiece/)).toBeNull()
    })
})
