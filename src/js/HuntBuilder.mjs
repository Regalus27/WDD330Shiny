import Hunt from "./Hunt.mjs";

export default class HuntBuilder {
    /**
     * @param {string} targetPokemon - name of target pokemon
     * @param {string} locationAreaID - id of location area to build hunt
     */
    constructor (targetPokemonName, locationAreaID, deviceCount) {
        this.targetPokemon = targetPokemonName;
        this.locationAreaID = locationAreaID;
        this.deviceCount = deviceCount;
    }

    buildNewHunt() {
        const id = Date.now();

        // API get Pokemon from targetPokemon name

        // API get locationname, encounter list from locationareaid

        // encounter count 0
        const count = 0;
      

        // id, target, locationName, encounterList, encounterCount, deviceCount
        let hunt = new Hunt(id, );

        return hunt;
    }
}