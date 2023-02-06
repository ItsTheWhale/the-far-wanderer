"use strict";
(() => {
  // src/events/begin.js
  var begin_default = {
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
    },
    begin_7_stay: {
      text: function(game2) {
        return `
        The rain is stopping. Mild rays of sunshine glow through the clouds.
        You feel that it is time to explore your surroundings.
        `;
      },
      actions: [
        {
          name: function(game2) {
            return "leave";
          },
          action: function(game2) {
            return {
              game: game2,
              nextEvent: "begin_8"
            };
          }
        }
      ]
    },
    begin_7_leave: {
      text: function(game2) {
        return `You carefully step outside into the rain.
        Although you are soaked, the rain is much weaker than before.
        You look around. You see structures scattered amongst the rubble, survivors of the destruction.
        The mist is too strong, casting a gray blur over everything.
        It is hard to see anything without getting close.
        `;
      },
      actions: [
        {
          name: function(game2) {
            return "explore the center";
          },
          action: function(game2) {
            return {
              game: game2,
              nextEvent: "explorevillage_1_center"
            };
          }
        },
        {
          name: function(game2) {
            return "explore the edges";
          },
          action: function(game2) {
            return {
              game: game2,
              nextEvent: "explorevillage_1_edges"
            };
          }
        }
      ]
    },
    begin_8: {
      text: function(game2) {
        return `You carefully step outside. 
        The rain has stopped, but any sunshine that penetrates the thick clouds warm little.
        A heavy mist covers the settlement, blinding everything in view.
        You look around. You see structures scattered amongst the rubble, survivors of the destruction.
        It is hard to see anything without getting close.
        `;
      },
      actions: [
        {
          name: function(game2) {
            return "explore the center";
          },
          action: function(game2) {
            return {
              game: game2,
              nextEvent: "explorevillage_1_center"
            };
          }
        },
        {
          name: function(game2) {
            return "explore the edges";
          },
          action: function(game2) {
            return {
              game: game2,
              nextEvent: "explorevillage_1_edges"
            };
          }
        }
      ]
    }
  };

  // src/events/explorevillage.js
  var explorevillage_default = {
    explorevillage_1_center: {
      text: function(game2) {
        return `You walk slowly to the heart of the village. 
            As you go on, houses become bigger and more intact.
            A large monolithic spire of stone materialises from the deep fog, a monument of the forgotten past.`;
      },
      actions: [
        {
          name: function(game2) {
            return "continue";
          },
          action: function(game2) {
            return {
              game: game2,
              nextEvent: "explorevillage_2_center"
            };
          }
        }
      ]
    },
    explorevillage_1_edges: {
      text: function(game2) {
        return `You walk away from the center of the village.
            Survived structures become scarcer and smaller, until the sandy floor gives away to an endless plain of grass.
            Out here, only a few structures stand, scattered far along the parched landscape.`;
      },
      actions: [
        {
          name: function(game2) {
            return "continue";
          },
          action: function(game2) {
            return {
              game: game2,
              nextEvent: "explorevillage_2_edges"
            };
          }
        }
      ]
    },
    explorevillage_2_center: {
      text: function(game2) {
        return `Standing in front of the spire, it towers over you, casting a long, narrow shadow over everything.
            The elements have evidently taken its toll, as long cracks run down the structure after years of wind and rain.
            You spot a small dusty glass door, half covered by pebbles, but still functional.
            You gently push open the door, and the rusted hinges creak, after being opened for the first time in a long while.
            Dust falls from the ceiling as if it was going to collapse, but you gently walk in.`;
      },
      actions: [
        {
          name: function(game2) {
            return "continue";
          },
          action: function(game2) {
            return {
              game: game2,
              nextEvent: "explorevillage_2_edges"
            };
          }
        }
      ]
    },
    explorevillage_2_edges: {
      text: function(game2) {
        return `You are far from the village.
            The mist makes it hard to see far, but you spot what looks like an abandoned house in the distance.
            You slowly walk closer.
            You find a small old-fashioned two-story wooden house.
            It seems to be empty, probably abandoned during whatever apocalypse happened to this place.
            A dusty wooden door, paint peeling, hangs invitingly half-open.
            The door creaks as you push open it and step in.`;
      },
      actions: [
        {
          name: function(game2) {
            return "continue";
          },
          action: function(game2) {
            return {
              game: game2,
              nextEvent: "explorevillage_2_edges"
            };
          }
        }
      ]
    }
  };

  // src/events.js
  var events = {};
  Object.assign(events, begin_default);
  Object.assign(events, explorevillage_default);

  // src/settings.js
  var gameDefaults = {
    started: false,
    resources: {
      wood: 2
    }
  };

  // src/save.js
  function saveGame(game2) {
    window.localStorage.setItem("game", JSON.stringify(game2));
  }
  function loadGame() {
    var _a2;
    return (_a2 = window.localStorage.getItem("game")) !== null && _a2 !== void 0 ? _a2 : gameDefaults;
  }

  // src/main.js
  var _a;
  var game = gameDefaults;
  Object.assign(game, gameDefaults);
  (_a = document.getElementById("buttonReset")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    Object.assign(game, gameDefaults);
    saveGame(game);
    console.log("Game resetted");
    window.location.reload();
  });
  Object.assign(game, loadGame());
  function loadEvent(event) {
    document.getElementById("storyText").innerText = event.text();
    const storyActions = document.getElementById("storyActions");
    storyActions.innerHTML = "";
    for (const i in event.actions) {
      const actionElem = document.createElement("div");
      actionElem.classList.add("action");
      actionElem.innerText = event.actions[i].name();
      actionElem.addEventListener("click", () => {
        const action = event.actions[i].action(game);
        game = action.game;
        console.log(game);
        loadEvent(events[action.nextEvent]);
      });
      storyActions.appendChild(actionElem);
    }
  }
  if (!game.started) {
    loadEvent(events.begin_1);
  }
})();
