import {ActionType} from "./processing-actions";
import {processing_constants} from "./processing-constants";
import {initialProcess, ProcessingStateType} from "./processing-model";

export default function processingReducer (state = initialProcess, action: ActionType): ProcessingStateType {
    switch (action.type) {
        case processing_constants.IS_LOAD:
            return {...state, isLoading: action.load}
        default: return state
    }
}

