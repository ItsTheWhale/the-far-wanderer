import { gameStruct } from "./settings.js";
import BeginEvents from "./events/begin.js";

let events = {};
Object.assign(events, BeginEvents);

export { events };

export interface eventStruct {
    text: Function;
    actions: Array<{
        name: Function,
        action: Function
    }>;
}