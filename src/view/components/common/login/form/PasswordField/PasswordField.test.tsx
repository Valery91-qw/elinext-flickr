import { render , screen} from "@testing-library/react"
import {PasswordField} from "./PasswordField";


describe('PasswordField', () => {
    test('input without values', () => {
        render(<PasswordField classes={{field: 'password'}}
                           password={''}
                           setPassword={jest.fn()}
                           setCommonError={jest.fn()}
                           commonError={{email: false, password: false}} />)

        const passwordInput = screen.getByLabelText(/Password/)
        expect(screen.getByDisplayValue('')).toBe(passwordInput)
    })

    test('input with value: "My Password" should be displayed', () => {
        render(<PasswordField classes={{field: 'password'}}
                           password={"My Password"}
                           setPassword={jest.fn()}
                           setCommonError={jest.fn()}
                           commonError={{email: false, password: false}} />)
        const passwordInput = screen.getByLabelText(/Password/)
        expect(screen.getByDisplayValue("My Password")).toBe(passwordInput)
    })
})