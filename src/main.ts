import { events, eventStruct } from "./events.js";
import { saveGame, loadGame, exportGame } from "./save.js";
import { gameStruct, gameDefaults } from "./settings.js";

let game: gameStruct = structuredClone(gameDefaults);

// Nav
document.getElementById("buttonReset")?.addEventListener("click", () => {
    game = structuredClone(gameDefaults);
    saveGame(game);
    console.log("Game resetted");
    window.location.reload();
});

// Settings

Object.assign(game, loadGame());


// Events 

function loadEvent(event: eventStruct): void {
    document.getElementById("storyText")!.innerText = event.text(game);
    const storyActions = document.getElementById("storyActions") as HTMLDivElement;
    storyActions.innerHTML = "";
    for (const i in event.actions) {
        if (event.actions[i].name(game) === "<void>") continue;
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