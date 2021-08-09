import {ProcessingStateType} from "./processing-model";
import {isLoad} from "./processing-actions";
import processingReducer from "./processing-reducer";


let startState: ProcessingStateType

beforeEach(() => {
    startState = {
        isLoading: undefined
    }
})

test('The isLoading field should change its state to true', () => {

    const action = isLoad(true)

    const endState = processingReducer(startState, action)

    expect(startState.isLoading).toBeUndefined()
    expect(endState.isLoading).toBeTruthy()
})
test('In the processing state, the value of the isLoading field must be changed to false', () => {

    const action = isLoad(false)

    const endState = processingReducer(startState, action)

    expect(startState.isLoading).toBeUndefined()
    expect(endState.isLoading).toBeFalsy()
})