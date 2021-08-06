import {render, screen} from "@testing-library/react";
import {Login} from "./Login";


describe('Login', () => {
    const {asFragment} = render(<Login handleClose={jest.fn()} />)
    test('snapshot Login component', () => {
        //@ts-ignore
        expect(asFragment(<Login  handleClose={jest.fn()}/>)).toMatchSnapshot()
    })

    test('The login component should display items such as buttons and inputs', () => {
        render(<Login handleClose={jest.fn()} />)
        expect(screen.getByRole('button', {name: 'Sign In'})).toBeInTheDocument()
        expect(screen.getByRole('button', {name: ''})).toBeInTheDocument()
        expect(screen.getByLabelText(/Password/)).toBeInTheDocument()
        expect(screen.getByLabelText(/Email addres/)).toBeInTheDocument()
    })
})