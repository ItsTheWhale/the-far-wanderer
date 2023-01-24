import { events, eventStruct } from "./events.js";
import { saveGame, loadGame, exportGame } from "./save.js";
import { gameStruct, gameDefaults } from "./settings.js";

let game: gameStruct = gameDefaults;
Object.assign(game, gameDefaults);

// Nav
$("#buttonReset").click(() => {
    Object.assign(game, gameDefaults);
    console.log("Game resetted");
});

// Settings

Object.assign(game, loadGame());


// Events 

function loadEvent(event: eventStruct): void {
    $("#storyText").text(event.text());
    $("#storyActions").html("");
    for (const i in event.actions) {
        $("#storyActions").append(
            $("<div class=\"action\"></div>")
                .text(event.actions[i].name())
                .click(() => {
                    const action = event.actions[i].action(game);
                    game = action.game;
                    loadEvent(action.nextEvent);
                })
        );
    }
}

if (!game.started) {
    loadEvent(events.begin);
}