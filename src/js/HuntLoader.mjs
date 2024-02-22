import { getLocalStorage, renderUsingTemplate, renderWithoutTemplate } from "./utils.mjs";

export default class HuntLoader {
    // Manages checking for and loading hunts from localStorage for HuntTracker
    constructor(dropdownParentElementId) {
        this.storageKey = import.meta.env.VITE_LOCALSTORAGE_KEY;
        this.dropdownParentElement = document.getElementById(dropdownParentElementId);
    }

    init() {
        // Check localstorage for hunts.
        try{
            this.huntList = getLocalStorage(this.storageKey);
        } catch (e) {
            this.huntList = null;
        }

        this.openLoadHuntInterface();
    }

    openLoadHuntInterface() {
        if (this.huntList != null) {
            renderUsingTemplate(huntDropdownTemplate, this.huntList, this.dropdownParentElement, true);
            //bind button
            const buttonElement = document.getElementById("load_hunt_button"); // See huntDropdownTemplate
            buttonElement.textContent = "Load Hunt";
        } else {
            renderWithoutTemplate("No Hunts found.", this.dropdownParentElement, true);
        }
    }
}

/**
 * Template function for dropdown selector to choose hunt
 * Format: "Sandslash, 1234 encounters"
 * @param {list} huntList - list of hunt objects to render in dropdown
 */
function huntDropdownTemplate(huntList) {
    let output = `<label for="hunt_select">Choose a Hunt:</label>
    <select name="hunts" id="hunt_select">
    <option value="">--Select an option--</option>`;
    if(huntList != null) {
        huntList.forEach(hunt => {
            output += `\n<option value="${hunt.getId()}">"${hunt.getTarget().name}, ${hunt.getEncounterCount()} encounters"</option>`;
        });
    }
    output += `</select>`;
    output += `<button id="load_hunt_button">Load Hunt</button>`;

    return output;
}