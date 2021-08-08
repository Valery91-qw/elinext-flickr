import {fireEvent, render, screen} from "@testing-library/react";
import {Form} from "./Form";

describe('Form', () => {
    test('the Form component without some values', () => {
        render(<Form />)
        expect(screen.getByLabelText(/Email address/)).toBeInTheDocument()
        expect(screen.getByLabelText(/Password/)).toBeInTheDocument()
        expect(screen.getByText(/Sign In/)).toBeInTheDocument()
    })
    test('If pass the value in the email field', () => {
        render(<Form />)
        const emailInput = screen.getByLabelText(/Email address/) as HTMLInputElement
        const passwordInput = screen.getByLabelText(/Password/) as HTMLInputElement
        fireEvent.change(emailInput, {target: {value: 'my email'}})
        expect(screen.getByDisplayValue(/my email/)).toBe(emailInput)
        expect(screen.getByDisplayValue(/my email/)).not.toBe(passwordInput)
        expect(emailInput.value).toBe('my email')
        expect(passwordInput.value).toBe('')
    })
})