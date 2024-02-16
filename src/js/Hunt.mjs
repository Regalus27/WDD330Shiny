/**
 * getId {use Date.now()}
 * getTarget {Target}
 * getNumberEncounters {}Number
 */

export default class Hunt {
    /**
     * New Hunt (Pulls from API)
     * @param {Target} target - Primary hunt target
     * @param locationArea - location for hunt
     */
    constructor(target, locationArea) {

    }

    /**
     * Loaded Hunt (No API)
     * @param {Target} primaryTarget
     * @param {string} locationName
     * @param encounterList - list of possible encounters in an area, list of Target
     * @param {Number} encounterCount
     * @param {Number} deviceCount - default 1, how many consoles are you hunting on?
     */
    constructor(primaryTarget, locationName, encounterList, encounterCount, deviceCount = 1) {

    }
}