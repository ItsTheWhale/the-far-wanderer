import BeginEvents from "./events/begin.js";
import ExploreVillageEvents from "./events/explorevillage.js";
let events = {};
Object.assign(events, BeginEvents);
Object.assign(events, ExploreVillageEvents);
export { events };
