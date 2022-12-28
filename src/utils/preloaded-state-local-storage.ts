import bookmarks from './utils-constants';

export default function loadFromLocalStorage() {
  const serialisedState = localStorage.getItem(bookmarks);
  if (serialisedState) return JSON.parse(serialisedState);
  return {};
}
