import { processingEnum } from './processing-enum'

export const isLoad = (load: boolean) => ({ type: processingEnum.IS_LOAD, load } as const)

export type IsLoadType = ReturnType<typeof isLoad>

export type ActionType = IsLoadType
