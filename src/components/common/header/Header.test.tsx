import {render, screen} from "@testing-library/react";
import {Header} from "./Header";

describe('Header', () => {
    test('header snapshot',  () => {
        const { asFragment } = render(<Header />)
        expect(asFragment(<Header />)).toMatchSnapshot()
    })
    test('render Header component', () => {
        render(<Header />)
        expect(screen.getByRole('button')).toBeInTheDocument()
        expect(screen.getByRole('banner')).toBeInTheDocument()
    })
})
