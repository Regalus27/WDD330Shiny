export default class Hunt {
    /**
     * Loaded Hunt (No API)
     * @param id
     * @param {Target} primaryTarget
     * @param {string} locationName
     * @param {Number} encounterCount - number of encounters so far in the hunt, NOT related to encounterList
     */
    constructor(id, primaryTarget, locationName, encounterCount) {
        this.id = id;
        this.primaryTarget = primaryTarget;
        this.locationName = locationName;
        this.encounterCount = encounterCount;
    }

    getEncounterCount() {
        return this.encounterCount;
    }

    getId() {
        return this.id;
    }

    getLocationName() {
        return this.locationName;
    }

    getTarget() {
        return this.primaryTarget;
    }

    getHuntStringed() {
        return JSON.stringify({id: this.getId(), hunt: new Hunt(this.getId(), this.getTarget(), this.getLocationName(), this.getEncounterCount())});
    }
}