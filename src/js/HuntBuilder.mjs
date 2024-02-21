import APIHandler from "./APIHandler.mjs";
import Hunt from "./Hunt.mjs";
import Encounter from "./Encounter.mjs";
import { renderUsingTemplate } from "./utils.mjs";

export default class HuntBuilder {
    /**
     * @param {string} formElementID - ID of form element to render form details in
     */
    constructor (formElementID) {
        this.parentElement = document.getElementById(formElementID);
    }

    async init() {
        let apiHandler = new APIHandler();

        // get list of games (going to artificially limit it to generation 1 to limit number of calls while testing
        // once rest works, this needs to have a generation select, and store which versions that generation has in it
        // screw this head hurts too much - take list of gen 1 pokemon and show all spots you can shiny hunt for it
        const game = 1;

        //get list of pokemon
        let pokemonData = await apiHandler.getData(`generation/${game}`);
        // pulls arrays of pokemon names. pokemonList.pokemon_species has X arrays, extract them and append them to a list, then use that list to render
        let pokemonList = [];
        pokemonData.pokemon_species.forEach(groupArray => {
            pokemonList.push(groupArray);
        });
        // update form
        renderUsingTemplate(huntBuilderPokemonTemplate, pokemonList, this.parentElement, true);

        document.getElementById("hunt_select").addEventListener("change", async (e) => {
            // on update pokemon select, pull location area list
            // sort using game name
            // "hunt_location_div"
            let locationParentElement = document.getElementById("hunt_location_div");
            let locationData = await apiHandler.getData(`pokemon/${e.target.value}/encounters`);
            let huntLocationAreaList = this.filterEncounterByVersion("red", locationData);

            // console.log(huntLocationAreaList[0].getEncounterChance());

            // make template to display encounter areas
            // fill in similar to the other template
            // then plan final display
            // then expand to other generations, should be easy, generation 1-X from dropdown, choose version from dropdown
        });

        

        //------------
        // chain is game (currently hard coded) (needs name for location choosing), pokemon, location
        // hunt needs id, primaryTarget, locationName, encounterList, encounterCount, deviceCount
        // id is date.now, Target (pokemon), locationName from locationArea, encounterlist (list Targets), encounter count (0), device count (prompt or edit in hunt screen)
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
 * @param {list} pokemonList - List of pokemon pulled from api to display in a select
 */
function huntBuilderPokemonTemplate(pokemonList) {
    let output = `<label for="hunt_select">Hunt Details</label>
    <select id="hunt_select" placeholder="Field Textarea">
    <option value="">----</option>`;

    pokemonList.forEach(element => {
        let pokemonName = element.name;
        output += `<option value="${pokemonName}">${pokemonName}</option>`;
    });

    output += `</select>
    <div id="hunt_location_div"></div>`;

    return output;
}