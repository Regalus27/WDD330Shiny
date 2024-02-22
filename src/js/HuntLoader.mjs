import { renderUsingTemplate } from "./utils.mjs";

export default class HuntLoader {
    // Manages checking for and loading hunts from localStorage for HuntTracker
    constructor(dropdownParentElementId) {
        this.dropdownParentElement = document.getElementById(dropdownParentElementId);
        this.storedHunt = [];
    }

    init() {
        // Check localstorage for hunts.
        renderUsingTemplate(huntDropdownTemplate, this.storedHunt, this.dropdownParentElement, true);
    }

    
}

/**
 * Template function for dropdown selector to choose hunt
 * Format: "Sandslash, 1234 encounters"
 * @param {list} storedHunt - list of hunt objects to render in dropdown
 */
function huntDropdownTemplate(storedHunt) {
    let output = "No hunts found.";
    if(storedHunt != null) {
        output = `<a href="./load_hunt.html">Load Hunt</a>`;
    }
    return output;
}