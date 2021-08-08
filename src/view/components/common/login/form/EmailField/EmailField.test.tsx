import { render , screen} from "@testing-library/react"
import {EmailField} from "./EmailField";

describe('EmailField', () => {
    test('input without values', () => {
        render(<EmailField classes={{field: 'email'}}
                           email={''}
                           setEmail={jest.fn()}
                           setCommonError={jest.fn()}
                           commonError={{email: false, password: false}} />)

       const emailInput = screen.getByLabelText(/Email address/)
       expect(screen.getByDisplayValue('')).toBe(emailInput)
    })

    test('input with value: "My Email" should be displayed', () => {
        render(<EmailField classes={{field: 'email'}}
                           email={"My Email"}
                           setEmail={jest.fn()}
                           setCommonError={jest.fn()}
                           commonError={{email: false, password: false}} />)
        const emailInput = screen.getByLabelText(/Email address/)
        expect(screen.getByDisplayValue("My Email")).toBe(emailInput)
    })
})