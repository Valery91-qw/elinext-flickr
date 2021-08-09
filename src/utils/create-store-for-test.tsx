import {createStore} from "redux";
import {rootReducer} from "../bll/store";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";


export const renderWithRedux =
    (component: any, { initialState, store = createStore(rootReducer, initialState) }: any = {}) => {
    return { ...render(<Provider store={store}>{component}</Provider>) }
}