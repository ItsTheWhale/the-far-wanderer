var _a;
import { events } from "./events.js";
import { saveGame, loadGame } from "./save.js";
import { gameDefaults } from "./settings.js";
let game = structuredClone(gameDefaults);
// Nav
(_a = document.getElementById("buttonReset")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    game = structuredClone(gameDefaults);
    saveGame(game);
    console.log("Game resetted");
    window.location.reload();
});
// Settings
Object.assign(game, loadGame());
// Events 
function loadEvent(event) {
    document.getElementById("storyText").innerText = event.text(game);
    const storyActions = document.getElementById("storyActions");
    storyActions.innerHTML = "";
    for (const i in event.actions) {
        if (event.actions[i].name(game) === "<void>")
            continue;
        const actionElem = document.createElement("div");
        actionElem.classList.add("action");
        actionElem.innerText = event.actions[i].name(game);
        actionElem.addEventListener("click", () => {
            const action = event.actions[i].action(game);
            game = action.game;
            console.log(game);
            // @ts-ignore
            loadEvent(events[action.nextEvent]);
        });
        storyActions.appendChild(actionElem);
    }
}
if (!game.started) {
    // @ts-ignore
    loadEvent(events.begin_1);
}
