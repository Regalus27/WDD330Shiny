export default class Encounter {
    /**
     * @param name - name of area
     * @param url - api endpoint for ease of access
     * @param versionName - game name for display
     * @param encounters - info generated in HuntBuilder defining encounters in location
     */
    constructor(name, url, versionName, encounters) {
        this.name = name;
        this.url = url;
        this.versionName = versionName;
        this.encounters = encounters;
    }

    getEncounters() {
        return this.encounters;
    }

    getEncounterChance() {
        // maps the encounter details into an array of encounter chances, then uses reduce to sum those encounter chances.
        // This really should be spread over multiple lines for legibility, but I'm proud of my one line solution. :)
        return this.encounters.encounter_details.map(e => e.chance).reduce((partialSum, encounterChance) => partialSum + encounterChance, 0);
    }

    getName() {
        return this.name;
    }

    getURL() {
        return this.url;
    }

    getVersionName() {
        return this.versionName;
    }
}