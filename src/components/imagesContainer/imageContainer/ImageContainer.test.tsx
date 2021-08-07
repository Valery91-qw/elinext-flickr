import {createStore} from "redux";
import {rootReducer} from "../../../bll/store";
import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {ImageContainer} from "./ImageContainer";
import userEvent from "@testing-library/user-event";


const renderWithRedux = (
    component: any,
    { initialState, store = createStore(rootReducer, initialState) }: any = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>)
    }
}

const image = {
    id: '1',
    farm: 1,
    title: 'first images',
    isfamily: 1,
    isfriend: 1,
    ispublic: 1,
    owner: '1',
    secret: 'secret 1',
    server: 'first server',
    url: 'my image'
}

describe('Image container', () => {
    test('This case should render an image container', () => {
        renderWithRedux(<ImageContainer image={image} />)
        expect(screen.getByRole('textbox')).toBeInTheDocument()
        expect(screen.getByRole('button')).toBeInTheDocument()
        expect(screen.getByText(/first images/)).toBeInTheDocument()
    })
    test('This case should display the passed value', () => {
        renderWithRedux(<ImageContainer image={image} />)
        expect(screen.getByRole('textbox')).toBeInTheDocument()
        expect(screen.getByDisplayValue('')).toBeInTheDocument()
        userEvent.type(screen.getByRole('textbox'), 'hello')
        expect(screen.getByDisplayValue('hello')).toBeInTheDocument()
    })
})