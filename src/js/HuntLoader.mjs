import { getLocalStorage } from "./utils.mjs";

export default class HuntLoader {
    // Manages checking for and loading hunts from localStorage for HuntTracker
    constructor(buttonID) {
        this.storageKey = import.meta.env.VITE_LOCALSTORAGE_KEY;
        this.buttonID = buttonID;
    }

    init() {
        // Check localstorage for hunts.
        this.huntList = getLocalStorage(this.storageKey);
        let buttonElement = document.getElementById(this.buttonID);

        if (this.huntList != null) {
            // bind function to button or setup proper template for buttons to insert
            buttonElement.addEventListener("click", (e) => {

            });
            buttonElement.textContent = "Load Hunt";
            buttonElement.classList.remove("greyed_button");
        } else {
            buttonElement.textContent = "No Hunts Found";
        }
    }


}