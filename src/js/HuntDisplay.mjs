export default class HuntDisplay {
    constructor(hunt) {
        this.hunt = hunt;
        this.cardElement = document.getElementById("card_div");
        this.homeElement = document.getElementById("return_home_card");
        this.nameElement = document.getElementById("target_name");
        this.encounterElement = document.getElementById("target_encounters");
    }

    init() {
        this.nameElement.textContent = this.hunt.getTarget();
        this.encounterElement.textContent = this.hunt.getEncounterCount();
        this.cardElement.addEventListener("click", () => {
            this.encounterElement.textContent = this.hunt.incrementEncounterCount();
        });
        this.homeElement.addEventListener("click", () => {
            window.location.href = "./index.html";
        });
    }
}

