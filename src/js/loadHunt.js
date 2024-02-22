import Hunt from "./Hunt.mjs";
import HuntDisplay from "./HuntDisplay.mjs";
import { getLocalStorage } from "./utils.mjs";

let storage = getLocalStorage();
let huntInfo = storage[0].hunt;

let loadedHunt = new Hunt(
  huntInfo.id,
  huntInfo.primaryTarget,
  huntInfo.locationName,
  huntInfo.encounterCount,
);
let huntDisplay = new HuntDisplay(loadedHunt);
huntDisplay.init();
