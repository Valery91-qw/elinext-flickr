import React from "react";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import bookmarksReducer from "../../bll/bookmarks/bookmarks-reducer";
import {RootStateType} from "../../bll/store";
import thunk from "redux-thunk";
import searchReducer from "../../bll/search/search-reducer";

const initialSate: RootStateType = {
    search: {
        searchValue: 'empty string',
        pagination: {
            page: 1,
            pages: 10,
        },
        images: [
            {
                id: '1',
                farm: 1,
                title: 'first images',
                isfamily: 1,
                isfriend: 1,
                ispublic: 1,
                owner: '1',
                secret: 'secret 1',
                server: 'first server',
                url: 'my image'
            },
            {
                id: '2',
                farm: 2,
                title: 'second images',
                isfamily: 2,
                isfriend: 2,
                ispublic: 2,
                owner: '2',
                secret: 'secret 2',
                server: 'second server',
                url: 'not my image'}
        ],
    },
    bookmarks: {
        bookmarksImages: [
            {
                id: '1',
                farm: 1,
                title: 'first images',
                isfamily: 1,
                isfriend: 1,
                ispublic: 1,
                owner: '1',
                secret: 'secret 1',
                server: 'first server',
                url: 'my image',
                tags: ['in', 'bookmark']
            },
        ]
    },
    process: {
        isLoading: undefined
    }
}

const rootReducer = combineReducers({
    search: searchReducer,
    bookmarks: bookmarksReducer
})

const storybookStore = createStore(
    rootReducer ,
    initialSate,
    applyMiddleware(thunk)
)
export const ReduxContextDecorator = (story: any) => (
    <Provider store={storybookStore} >
        {story()}
    </Provider>
)

export const RouterDecorator = (story: any) => (
    <HashRouter>
        {story()}
    </HashRouter>
)