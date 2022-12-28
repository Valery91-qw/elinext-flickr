import { Middleware } from 'redux';
import BookmarksEnum from '../redux/bookmarks/bookmarks-enum';
import bookmarks from './utils-constants';

function saveToLocalStorage(state: Object) {
  const serialisedState = JSON.stringify(state);
  localStorage.setItem(bookmarks, serialisedState);
}

const saveToLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
  next(action);
  if (action.type === BookmarksEnum.ADD_IMAGE || action.type === BookmarksEnum.REMOVE_IMAGE) {
    saveToLocalStorage({
      bookmarks: store.getState().bookmarks,
    });
  }
};

export default saveToLocalStorageMiddleware;
