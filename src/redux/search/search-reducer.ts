/* eslint no-param-reassign: 0 */
import { createReducer } from '@reduxjs/toolkit';
import { setPaginationOption, setPhotos, setSearchValue } from './search-actions';
import { initialSearch } from './search-model';

const searchReducer = createReducer(initialSearch, (builder) => {
  builder
    .addCase(setSearchValue, (state, action) => {
      state.searchValue = action.payload;
    })
    .addCase(setPhotos, (state, action) => {
      state.images = action.payload;
    })
    .addCase(setPaginationOption, (state, action) => {
      state.pagination = action.payload;
    });
});

export default searchReducer;
