import APIHandler from "./APIHandler.mjs";
import Hunt from "./Hunt.mjs";
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

        //get list of games (going to artificially limit it to generation 1 to limit number of calls while testing
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

        //------------
        // 
    }
}

/**
 * @param {list} pokemonList - List of pokemon pulled from api to display in a select
 */
function huntBuilderPokemonTemplate(pokemonList) {
    let output = `<label for="select1">Hunt Details</label>
    <select id="select1" placeholder="Field Textarea">
    <option value="">Choose</option>`;

    pokemonList.forEach(element => {
        let pokemonName = element.name;
        output += `<option value="${pokemonName}">${pokemonName}</option>`;
    });

    output += `</select>`;

    return output;
}