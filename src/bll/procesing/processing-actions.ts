import { createAction } from '@reduxjs/toolkit'
import ProcessingEnum from './processing-enum'

export const isLoad = createAction<boolean, ProcessingEnum.IS_LOAD>(ProcessingEnum.IS_LOAD)

export type IsLoadType = ReturnType<typeof isLoad>

export type ActionType = IsLoadType
