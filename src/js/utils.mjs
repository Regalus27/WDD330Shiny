export function getBaseURL() {
    return import.meta.env.VITE_API_BASEURL;
}

/**
 * @param r - fetched data from API
 */
async function convertToJson(r) {
    let response = await r.json();
    if (r.ok) {
      return response;
    } else {
      throw new Error("Issue Accessing API");
    }
}
  
export async function getData(query) {
    //TODO: Add error handling for convertToJson
    const response = await fetch(baseURL + query);
    const data = await convertToJson(response);
    return data;
}

/**
 * Returns localStorage parsed as a JSON
 */
export function getLocalStorage() {
    return JSON.parse(localStorage.getItem());
}

export function getLocalStorageKey() {
    return import.meta.env.VITE_LOCALSTORAGE_KEY;
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