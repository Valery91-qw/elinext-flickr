export default function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem('bookmarkState')
        if (serialisedState === null) return
        return JSON.parse(serialisedState)
    } catch (e) {
        console.warn(e)
        return
    }
}