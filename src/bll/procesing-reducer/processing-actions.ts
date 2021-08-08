import {processing_constants} from "./processing-constants";

export const isLoad = (load: boolean) => ({type: processing_constants.IS_LOAD, load} as const)

export type IsLoadType = ReturnType<typeof isLoad>

export type ActionType = IsLoadType