export default class Target {
    /**
     * @param {string} name - Name of Pokemon
     * @param {string} imageURL - URL of image
     * @param {number} encounterChance - chance for Pokemon to be encountered in the Hunts locationArea
     * @param {number} numberShinyFound - How many times has this Pokemon been shiny during this hunt?
     */
    constructor(name, imageURL, encounterChance, numberShinyFound = 0) {
        this.name = name;
        this.imageURL = imageURL;
        this.encounterChance = encounterChance;
        this.numberShinyFound = numberShinyFound;
    }
}