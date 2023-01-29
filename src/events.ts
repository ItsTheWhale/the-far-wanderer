import { gameStruct } from "./settings.js";
import BeginEvents from "./events/begin.js";
import ExploreVillageEvents from "./events/explorevillage.js";

let events = {};
Object.assign(events, BeginEvents);
Object.assign(events, ExploreVillageEvents);

export { events };

export interface eventStruct {
    text: Function;
    actions: Array<{
        name: Function,
        action: Function
    }>;
}