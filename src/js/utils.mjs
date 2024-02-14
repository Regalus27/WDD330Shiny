/**
 * Returns localStorage parsed as a JSON
 * @param {string} key - Key of localStorage to be returned.
 */
export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}