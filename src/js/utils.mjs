export function getBaseURL() {
    // Should be environmental variable but VITE isn't playing nice
    return "https://pokeapi.co/api/v2/";
}

export function addToLocalStorage(stringifiedData) {
    let dataObject = JSON.parse(stringifiedData);
    let oldStorage = getLocalStorage();
    let newStorage = [];
    if (oldStorage != null) {
        newStorage = oldStorage.filter((element) => {
            element.id != dataObject.id;
        });
    }
    newStorage.push(dataObject);
    setLocalStorage(newStorage);
}

/**
 * Returns localStorage parsed as a JSON
 */
export function getLocalStorage() {
    return JSON.parse(localStorage.getItem(getLocalStorageKey()));
}

function getLocalStorageKey() {
    return "regal_shiny_storage";
}

/**
 * @param templateFunction - Function used to format data
 * @param data - data to insert into templateFunction
 * @param {element} parentElement - HTML Element to render inside of (usually a div)
 * @param {boolean} clear - Optional, if true clear parentElement before rendering
 * @param {string} position - Optional, defines where to render inside of parentElement
 */
export function renderUsingTemplate(
    templateFunction, 
    data, 
    parentElement, 
    clear = false, 
    position = "afterbegin"
    ) {
    if (clear) {
        parentElement.replaceChildren();
    }
    parentElement.insertAdjacentHTML(position, templateFunction(data));
}

/**
 * @param data - data to insert into templateFunction
 * @param {element} parentElement - HTML Element to render inside of (usually a div)
 * @param {boolean} clear - Optional, if true clear parentElement before rendering
 * @param {string} position - Optional, defines where to render inside of parentElement
 */
export function renderWithoutTemplate(
    data,
    parentElement,
    clear = false,
    position = "afterbegin"
    ) {
        if (clear) {
            parentElement.replaceChildren();
        }
        parentElement.insertAdjacentHTML(position, data);
}

function setLocalStorage(data) {
    let key = getLocalStorageKey();
    localStorage.setItem(key, JSON.stringify(data));
}