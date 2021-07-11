import {applyMiddleware, combineReducers, createStore} from "redux";
import {searchReducer} from "./search-reducer";
import thunk from "redux-thunk";
import {bookmarksReducer} from "./bookmarks/bookmarks-reducer";


const rootReducer = combineReducers({
    search: searchReducer,
    bookmarks: bookmarksReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootStateType = ReturnType<typeof rootReducer>