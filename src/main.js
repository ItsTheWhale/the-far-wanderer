import { events } from "./events.js";
import { loadGame } from "./save.js";
import { gameDefaults } from "./settings.js";
let game = gameDefaults;
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
function loadEvent(event) {
    $("#storyText").text(event.text());
    $("#storyActions").html("");
    for (const i in event.actions) {
        $("#storyActions").append($("<div class=\"action\"></div>")
            .text(event.actions[i].name())
            .click(() => {
            const action = event.actions[i].action(game);
            game = action.game;
            console.log(game);
            // @ts-ignore
            loadEvent(events[action.nextEvent]);
        }));
    }
}
if (!game.started) {
    // @ts-ignore
    loadEvent(events.begin_1);
}
