"use strict";
(() => {
  // src/events.js
  var events = {
    begin: {
      text: function(game2) {
        return `You wake up on a hard bed. The room is cold and dark, and you feed a persistent, throbbing pain in your head. You don't remember where you are, nor how you got here. As you sit up, you feel a hard, rounded object in your pocket. A pendant. It is made out of a strange, translucent green stone that emits a faint glow. Holding the pendant in your palm, you seem to feel a constant trickle of warmth flowing from the pendant. Or maybe it is just your imagination.`;
      },
      actions: [
        {
          name: function(game2) {
            return "continue";
          },
          action: function(game2) {
            return {
              game: game2,
              nextEvent: "<placeholder>"
            };
          }
        }
      ]
    }
  };

  // src/settings.js
  var gameDefaults = {
    started: false
  };

  // src/save.js
  function loadGame() {
    var _a;
    return (_a = window.localStorage.getItem("game")) !== null && _a !== void 0 ? _a : gameDefaults;
  }

  // src/main.js
  var game = gameDefaults;
  Object.assign(game, gameDefaults);
  $("#buttonReset").click(() => {
    Object.assign(game, gameDefaults);
    console.log("Game resetted");
  });
  Object.assign(game, loadGame());
  function loadEvent(event) {
    $("#storyText").text(event.text());
    $("#storyActions").html("");
    for (const i in event.actions) {
      $("#storyActions").append($('<div class="action"></div>').text(event.actions[i].name()).click(() => {
        const action = event.actions[i].action(game);
        game = action.game;
        loadEvent(action.nextEvent);
      }));
    }
  }
  if (!game.started) {
    loadEvent(events.begin);
  }
})();
