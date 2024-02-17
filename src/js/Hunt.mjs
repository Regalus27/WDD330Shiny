export default class Hunt {
    /**
     * Loaded Hunt (No API)
     * @param id
     * @param {Target} primaryTarget
     * @param {string} locationName
     * @param encounterList - list of possible encounters in an area, list of Target
     * @param {Number} encounterCount - number of encounters so far in the hunt, NOT related to encounterList
     * @param {Number} deviceCount - number of simultaneous encounters
     */
    constructor(id, primaryTarget, locationName, encounterList, encounterCount, deviceCount = 1) {
        this.id = id;
        this.primaryTarget = primaryTarget;
        this.locationName = locationName;
        this.encounterList = encounterList;
        this.encounterCount = encounterCount;
        this.deviceCount = deviceCount;
    }
    
    getDeviceCount() {
        return this.deviceCount;
    }

    getEncounterCount() {
        return this.encounterCount;
    }

    getEncounterList() {
        return this.encounterList;
    }

    getId() {
        return this.id;
    }

    getLocationName() {
        return this.locationName;
    }

    getTarget() {
        return this.primaryTarget();
    }
}