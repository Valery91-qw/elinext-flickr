import {applyMiddleware, combineReducers, createStore} from "redux";
import {searchReducer} from "./search-reducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    search: searchReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootStateType = ReturnType<typeof rootReducer>