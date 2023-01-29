import { events, eventStruct } from "./events.js";
import { saveGame, loadGame, exportGame } from "./save.js";
import { gameStruct, gameDefaults } from "./settings.js";

let game: gameStruct = gameDefaults;
Object.assign(game, gameDefaults);

// Nav
$("#buttonReset").click(() => {
    Object.assign(game, gameDefaults);
    console.log("Game resetted");
    window.location.reload();
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
                    console.log(game);
                    // @ts-ignore
                    loadEvent(events[action.nextEvent]);
                })
        );
    }
}

if (!game.started) {
    // @ts-ignore
    loadEvent(events.begin_1);
}