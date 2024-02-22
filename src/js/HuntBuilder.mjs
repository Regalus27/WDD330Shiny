import APIHandler from "./APIHandler.mjs";
import Hunt from "./Hunt.mjs";
import Encounter from "./Encounter.mjs";
import { addToLocalStorage, renderUsingTemplate, renderWithoutTemplate } from "./utils.mjs";

export default class HuntBuilder {
    /**
     * @param {string} formElementID - ID of form element to render form details in
     */
    constructor (formElementID) {
        this.parentElement = document.getElementById(formElementID);
    }

    async init() {
        let apiHandler = new APIHandler();

        const game = 1;
        let gameName = "red";
        let huntEncounterList = [];

        //get list of pokemon
        let pokemonData = await apiHandler.getData(`generation/${game}`);
        // pulls arrays of pokemon names. pokemonList.pokemon_species has X arrays, extract them and append them to a list, then use that list to render
        let pokemonList = [];
        pokemonData.pokemon_species.forEach(groupArray => {
            pokemonList.push(groupArray);
        });
        // update form
        renderUsingTemplate(huntBuilderPokemonTemplate, pokemonList, this.parentElement, true);

        // All of this is terrible.
        document.getElementById("hunt_select").addEventListener("change", async (e) => {
            let locationParentElement = document.getElementById("hunt_location_div");
            let locationData = await apiHandler.getData(`pokemon/${e.target.value}/encounters`);
            huntEncounterList = this.filterEncounterByVersion(gameName, locationData);

            renderUsingTemplate(huntBuilderEncounterTemplate, huntEncounterList, locationParentElement, true);

            let form = document.getElementById("huntForm");
            form.onsubmit = (formEvent) => {
                formEvent.preventDefault();

                let huntID = Date.now();
                let huntTargetName = document.getElementById("hunt_select").value;
                let huntLocationName = document.getElementById("encounter_select").value;
                let huntEncounterCount = 0;
                let formHunt = new Hunt(huntID, huntTargetName, huntLocationName, huntEncounterCount);
                formHunt.saveHunt();

                // navigate to load page and load the hunt
                window.location.href = "./load_hunt.html";
            }
        });
    }

    /**
     * @param versionName - name of game version to match
     * @param locationData - data returned by "pokemon/x/encounters"
     * returns list of Encounter
     */
    filterEncounterByVersion(versionName, locationData) {
        let output = []
        locationData.forEach(element => {
            element.version_details.forEach((versionDetails) => {
                if(versionDetails.version.name == versionName) {
                    let returnedLocationArea = new Encounter(element.location_area.name, element.location_area.url, versionDetails.version.name, versionDetails);
                    output.push(returnedLocationArea);
                }
            });
        });
        return output;
    }
}

/**
 * @param {list<Encounter>}encounterList - list of encounters to render
 */
function huntBuilderEncounterTemplate(encounterList) {
    let list = encounterList;
    let output = `<label for="encounter_select">Hunt Details</label>
    <select required name="encounter_select" id="encounter_select">
    <option value>----</option>`;

    if (list.length > 1) {
        list.forEach(encounter => {
            let encounterArea = encounter.getName();
            let encounterChance = encounter.getEncounterChance();

            output += `<option value="${encounterArea}">${encounterChance}% (${encounterArea})</option>`;
        });
    } else {
        output += `<option value>No Encounters Found</option>`;
    }
    output += `</select>
    <button type="submit" id="form_submit">Submit</button>`;

    return output;
}

/**
 * @param {list} pokemonList - List of pokemon pulled from api to display in a select
 */
function huntBuilderPokemonTemplate(pokemonList) {
    let output = `<label for="hunt_select">Hunt Details</label>
    <select required name="hunt_select" id="hunt_select">
    <option value>----</option>`;

    pokemonList.forEach(element => {
        let pokemonName = element.name;
        output += `<option value="${pokemonName}">${pokemonName}</option>`;
    });

    output += `</select>
    <div id="hunt_location_div"></div>`;

    return output;
}