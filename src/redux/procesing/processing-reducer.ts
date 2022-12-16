/* eslint no-param-reassign: 0 */
import { createReducer } from '@reduxjs/toolkit'
import isLoad from './processing-actions'
import { initialProcess } from './processing-model'

const processingReducer = createReducer(initialProcess, (builder) => {
  builder.addCase(isLoad, (state, action) => {
    state.isLoading = action.payload
  })
})

export default processingReducer
