export default class LocationArea {
    /**
     * @param name - name of area
     * @param encounters - info generated in HuntBuilder defining encounters in location
     */
    constructor(name, versionName, encounters) {
        this.name = name;
        this.versionName = versionName;
        this.encounters = encounters;
    }

    getEncounters() {
        return this.encounters;
    }

    getName() {
        return this.name;
    }

    getVersionName() {
        return this.versionName;
    }
}