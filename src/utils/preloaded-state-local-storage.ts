export default function loadFromLocalStorage() {
  const serialisedState = localStorage.getItem('bookmarkState')
  if (serialisedState) return JSON.parse(serialisedState)
  return {}
}
