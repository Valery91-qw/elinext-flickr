import {isLoad, processingReducer, ProcessingStateType} from "./processing-reducer";


let startState: ProcessingStateType

beforeEach(() => {
    startState = {
        isLoading: undefined
    }
})

test('isLoading field must be true', () => {

    const action = isLoad(true)

    const endState = processingReducer(startState, action)

    expect(startState.isLoading).toBeUndefined()
    expect(endState.isLoading).toBeTruthy()
})
test('isLoading field must be false', () => {

    const action = isLoad(false)

    const endState = processingReducer(startState, action)

    expect(startState.isLoading).toBeUndefined()
    expect(endState.isLoading).toBeFalsy()
})