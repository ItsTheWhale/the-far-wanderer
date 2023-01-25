"use strict";
(() => {
  // src/events.js
  var events = {
    begin_1: {
      text: function(game2) {
        return `You wake up on a hard bed. 
            The room is cold and dark, and you feed a persistent, throbbing pain in your head. 
            You don't remember where you are, nor how you got here. 
            As you sit up, you feel a hard, rounded object in your pocket.
            A pendant. It is made out of a strange, translucent green stone that emits a faint, almost otherworldly glow in the dark. 
            You turn the pendant around. Engraved on the pendant is an insignia, the elegant twirling lines tracing shapes on the stone. 
            You cannot describe how it exactly looks, but it feels strangely familiar yet distant, as if you have seen it somewhere before.
            Holding the pendant in your palm, you seem to feel a constant trickle of warmth flowing into your hand. 
            Or maybe it is just your imagination.`;
      },
      actions: [
        {
          name: function(game2) {
            return "continue";
          },
          action: function(game2) {
            return {
              game: game2,
              nextEvent: "begin_2"
            };
          }
        }
      ]
    },
    begin_2: {
      text: function(game2) {
        return `You cannot see a single thing in this pitch-black room. 
            You nearly trip on a cracked floor tile, evidently this place has been forsaken for years without maintenance. 
            You blindly feel around the walls, and you feel a circular doorknob. 
            Excited at a way out, you slam the door open. 
            You see nothing but shattered rubble scattered around the sandy ground.
            From the utter destruction, something very wrong must have happened to this place, you wonder.
            It is night, and rain is pouring down, and the few stars that still shine through the clouds illuminate little.
            The faint and flickering rays of starlight seep into the windowless room.
            It is empty except for a lone bed and dusty fireplace, with a few time-darkened pieces of wood scattered on the floor.
            The rain is too strong to leave the house now.`;
      },
      actions: [
        {
          name: function(game2) {
            return "stoke the fire";
          },
          action: function(game2) {
            game2.resources.wood = 4;
            return {
              game: game2,
              nextEvent: "begin_3"
            };
          }
        }
      ]
    },
    begin_3: {
      text: function(game2) {
        return `You rub two pieces of wood together to light a fire. 
            You throw a piece of wood into the smoking tinder, and the licking tongues of flame grab it.
            Using the faint light of the flickering fire, you gather the remaining pieces of wood.
            You count 5 in total.
            The wind is still howling outside, and the rain bashing every inch of the land. 
            You decide it is too dangerous to gather more wood outside.`;
      },
      actions: [
        {
          name: function(game2) {
            return "stoke the fire";
          },
          action: function(game2) {
            game2.resources.wood--;
            return {
              game: game2,
              nextEvent: "begin_4"
            };
          }
        }
      ]
    },
    begin_4: {
      text: function(game2) {
        return `The storm rages on unabated.
            Water starts to drip from the cracked concrete ceiling, evidence of its disrepair.
            A sudden downpour forces a torrent of water into the room through the open door.
            You quickly shut the door, but only after the floodwater smothers most of the fire.
            Deprived of the outside light, the only thing you can see is the faint glow of the reviving fireplace.
            It will soon be over.`;
      },
      actions: [
        {
          name: function(game2) {
            return "stoke the fire";
          },
          action: function(game2) {
            game2.resources.wood--;
            return {
              game: game2,
              nextEvent: "begin_5"
            };
          }
        }
      ]
    },
    begin_5: {
      text: function(game2) {
        return `The fire is flickering. 
            You reach for more wood, but only one piece is left.
            You are hesitating whether to throw it in, or save it for later.
            `;
      },
      actions: [
        {
          name: function(game2) {
            return "stoke the fire";
          },
          action: function(game2) {
            game2.resources.wood--;
            return {
              game: game2,
              nextEvent: "begin_6_burn"
            };
          }
        },
        {
          name: function(game2) {
            return "save the wood";
          },
          action: function(game2) {
            return {
              game: game2,
              nextEvent: "begin_6_noburn"
            };
          }
        }
      ]
    },
    begin_6_burn: {
      text: function(game2) {
        return `You give in to the urge and throw your final piece of wood into the fireplace.
            The fire glows brightly at new fuel.
            Outside, the torrent of rain is slowing down, the storm abating.
            It is now possible to leave the shelter without too much danger.
            Shivering at the damp cold air, you lean closer to the roaring fire.
            Perhaps burning the wood was worth it after all.
            `;
      },
      actions: [
        {
          name: function(game2) {
            return "wait a while";
          },
          action: function(game2) {
            return {
              game: game2,
              nextEvent: "begin_7_stay"
            };
          }
        },
        {
          name: function(game2) {
            return "leave the house";
          },
          action: function(game2) {
            return {
              game: game2,
              nextEvent: "begin_7_leave"
            };
          }
        }
      ]
    },
    begin_6_noburn: {
      text: function(game2) {
        return `You resist the temptation and pocket the piece of wood.
            Outside, the torrent of rain is slowing down, the storm abating.
            It is now possible to leave the shelter without too much danger.
            Although you are shivering at the cold, damp air, you have backup fuel in times of need.
            Perhaps saving the wood was worth it after all.
            `;
      },
      actions: [
        {
          name: function(game2) {
            return "wait a while";
          },
          action: function(game2) {
            return {
              game: game2,
              nextEvent: "begin_7_stay"
            };
          }
        },
        {
          name: function(game2) {
            return "leave the house";
          },
          action: function(game2) {
            return {
              game: game2,
              nextEvent: "begin_7_leave"
            };
          }
        }
      ]
    }
  };

  // src/settings.js
  var gameDefaults = {
    started: false,
    resources: {
      wood: 2
    }
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
    window.location.reload();
  });
  Object.assign(game, loadGame());
  function loadEvent(event) {
    $("#storyText").text(event.text());
    $("#storyActions").html("");
    for (const i in event.actions) {
      $("#storyActions").append($('<div class="action"></div>').text(event.actions[i].name()).click(() => {
        const action = event.actions[i].action(game);
        game = action.game;
        console.log(game);
        loadEvent(events[action.nextEvent]);
      }));
    }
  }
  if (!game.started) {
    loadEvent(events.begin_1);
  }
})();
