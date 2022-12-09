import { ActionType } from './processing-actions'
import { processingEnum } from './processing-enum'
import { initialProcess, ProcessingStateType } from './processing-model'

export default function processingReducer(
  state = initialProcess,
  action: ActionType,
): ProcessingStateType {
  switch (action.type) {
    case processingEnum.IS_LOAD:
      return { ...state, isLoading: action.load }
    default:
      return state
  }
}
