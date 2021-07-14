
const IS_LOAD = "IS_LOAD"

const initialState: ProcessingStateType = {
    isLoading: undefined
}

export const processingReducer = (state = initialState, action: ActionType): ProcessingStateType => {
    switch (action.type) {
        case "IS_LOAD":
            return {...state, isLoading: action.load}
        default: return state
    }
}

export const isLoad = (load: boolean) => ({type: IS_LOAD, load} as const)

export type IsLoadType = ReturnType<typeof isLoad>

type ActionType = IsLoadType

export type ProcessingStateType = {
    isLoading: boolean | undefined
}