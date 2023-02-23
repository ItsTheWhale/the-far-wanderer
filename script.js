"use strict";
(() => {
  // src/events/begin.js
  var begin_default = {
    begin_1: {
      id: "begin_1",
      text: function(game2) {
        return `You wake up on a hard bed. 
        The room is cold and dark, and you feed a persistent, throbbing pain in your head. 
        You don't remember where you are, nor how you got here. 
        As you sit up, you feel a hard, rounded object in your pocket.
        A pendant. It is made out of a strange, translucent green stone that emits a faint, almost otherworldly glow in the dark. 
        You turn the pendant around. Engraved on the pendant is an insignia, the elegant twirling lines tracing shapes on the stone. 
        You cannot describe how it exactly looks, but it feels strangely familiar yet distant, as if you have seen it somewhere before.
        Holding the pendant in your palm, you seem to feel a constant trickle of warmth flowing into your hand. 
        Or maybe it is just your imagination.`.replaceAll("\n", "");
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
      id: "begin_2",
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
        The rain is too strong to leave the house now.`.replaceAll("\n", "");
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
      id: "begin_3",
      text: function(game2) {
        return `You rub two pieces of wood together to light a fire. 
        You throw a piece of wood into the smoking tinder, and the licking tongues of flame grab it.
        Using the faint light of the flickering fire, you gather the remaining pieces of wood.
        You count 5 in total.
        The wind is still howling outside, and the rain bashing every inch of the land. 
        You decide it is too dangerous to gather more wood outside.`.replaceAll("\n", "");
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
      id: "begin_4",
      text: function(game2) {
        return `The storm rages on unabated.
        Water starts to drip from the cracked concrete ceiling, evidence of its disrepair.
        A sudden downpour forces a torrent of water into the room through the open door.
        You quickly shut the door, but only after the floodwater smothers most of the fire.
        Deprived of the outside light, the only thing you can see is the faint glow of the reviving fireplace.
        It will soon be over.`.replaceAll("\n", "");
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
      id: "begin_5",
      text: function(game2) {
        return `The fire is flickering. 
        You reach for more wood, but only one piece is left.
        You are hesitating whether to throw it in, or save it for later.
        `.replaceAll("\n", "");
      },
      actions: [
        {
          name: function(game2) {
            return "stoke the fire";
          },
          action: function(game2) {
            game2.resources.wood--;
            game2.resources.ash++;
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
      id: "begin_6_burn",
      text: function(game2) {
        return `You give in to the urge and throw your final piece of wood into the fireplace.
        The fire glows brightly at new fuel.
        Outside, the torrent of rain is slowing down, the storm abating.
        It is now possible to leave the shelter without too much danger.
        Shivering at the damp cold air, you lean closer to the roaring fire.
        Some ashes drift to the bottom of the fireplace. You decide to pocket it anyway.
        Perhaps burning the wood was worth it after all.
        `.replaceAll("\n", "");
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
      id: "begin_6_noburn",
      text: function(game2) {
        return `You resist the temptation and pocket the piece of wood.
        Outside, the torrent of rain is slowing down, the storm abating.
        It is now possible to leave the shelter without too much danger.
        Although you are shivering at the cold, damp air, you have backup fuel in times of need.
        Perhaps saving the wood was worth it after all.
        `.replaceAll("\n", "");
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
      id: "begin_7_stay",
      text: function(game2) {
        return `
        The rain is stopping. Mild rays of sunshine glow through the clouds.
        You feel that it is time to explore your surroundings.
        `.replaceAll("\n", "");
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
      id: "begin_7_leave",
      text: function(game2) {
        return `You carefully step outside into the rain.
        Although you are soaked, the rain is much weaker than before.
        You look around. You see structures scattered amongst the rubble, survivors of the destruction.
        The mist is too strong, casting a gray blur over everything.
        It is hard to see anything without getting close.
        `.replaceAll("\n", "");
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
      id: "begin_8",
      text: function(game2) {
        return `You carefully step outside. 
        The rain has stopped, but any sunshine that penetrates the thick clouds warm little.
        A heavy mist covers the settlement, blinding everything in view.
        You look around. You see structures scattered amongst the rubble, survivors of the destruction.
        It is hard to see anything without getting close.
        `.replaceAll("\n", "");
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
      id: "explorevillage_1_center",
      text: function(game2) {
        return `You walk slowly to the heart of the village. 
            As you go on, houses become bigger and more intact.
            A large monolithic spire of stone materialises from the deep fog, a monument of the forgotten past.`.replaceAll("\n", "");
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
      id: "explorevillage_1_edges",
      text: function(game2) {
        return `You walk away from the center of the village.
            Survived structures become scarcer and smaller, until the sandy floor gives away to an endless plain of grass.
            Out here, only a few structures stand, scattered far along the parched landscape.`.replaceAll("\n", "");
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
      id: "explorevillage_2_center",
      text: function(game2) {
        return `Standing in front of the spire, it towers over you, casting a long, narrow shadow over everything.
            The elements have evidently taken its toll, as long cracks run down the structure after years of wind and rain.
            You spot a small dusty glass door, half covered by pebbles, but still functional.
            You gently push open the door, and the rusted hinges creak, after being opened for the first time in a long while.
            Dust falls from the ceiling as if it was going to collapse, but you gently walk in.`.replaceAll("\n", "");
      },
      actions: [
        {
          name: function(game2) {
            return "continue";
          },
          action: function(game2) {
            return {
              game: game2,
              nextEvent: "explorevillage_3_spire"
            };
          }
        }
      ]
    },
    explorevillage_2_edges: {
      id: "explorevillage_2_edges",
      text: function(game2) {
        return `You are far from the village.
            The mist makes it hard to see far, but you spot what looks like an abandoned house in the distance.
            You slowly walk closer.
            You find a small old-fashioned two-story wooden house.
            It seems to be empty, probably abandoned during whatever apocalypse happened to this place.
            A dusty wooden door, paint peeling, hangs invitingly half-open.
            The door creaks as you push it open and step in.`.replaceAll("\n", "");
      },
      actions: [
        {
          name: function(game2) {
            return "continue";
          },
          action: function(game2) {
            return {
              game: game2,
              nextEvent: "explorevillage_3_house"
            };
          }
        }
      ]
    },
    explorevillage_3_spire: {
      id: "explorevillage_3_spire",
      text: function(game2) {
        return `
            The spire is obviously abandoned, the crumbling walls plastered with gray dust.
            A long corridor stretches away into the shadows.
            You find a small yellowed memento crudely stuck on the walls, its small black print fading to time.
            You cannot read any of the illegible print, but you could with a pinch of ash${game2.resources.ash === 0 ? ", but you have none. Maybe come back later." : ". You reach into your pocket and fish out a handful of the powder. Lucky you burnt the wood earlier."}
            You notice a small storage room on the side of a corridor. The combination lock is tight, but rusting at its heart.
            You can hopefully prise it open with a fragment of wood${game2.resources.wood === 0 ? ", but you have none. Maybe come back later." : ". You reach into your pocket and fish out a small piece of wood. Lucky you didn't burn the wood earlier."}
            `.replaceAll("\n", "");
      },
      actions: [
        {
          name: function(game2) {
            if (game2.resources.ash === 0)
              return "<void>";
            return "read the memento";
          },
          action: function(game2) {
            game2.resources.ash--;
            return {
              game: game2,
              nextEvent: "explorevillage_4_spire_memento"
            };
          }
        },
        {
          name: function(game2) {
            if (game2.resources.wood === 0)
              return "<void>";
            return "open the cabinet";
          },
          action: function(game2) {
            game2.resources.wood--;
            return {
              game: game2,
              nextEvent: "explorevillage_4_spire_storage"
            };
          }
        }
      ]
    },
    explorevillage_3_house: {
      id: "explorevillage_3_house",
      text: function(game2) {
        return `
            The old house is obviously abandoned, a thick layer of gray dust covering every surface.
            In the center of the house is a crooked wooden table, nails rusting from disuse.
            You find a small slip of yellowed paper weighted down on the table, its ink fading to time.
            You cannot read any of the illegible ink, but you could with a pinch of ash${game2.resources.ash === 0 ? ", but you have none. Maybe come back later." : ". You reach into your pocket and fish out a handful of the powder. Lucky you burnt the wood earlier."}
            In the corner of your eye, you notice a small cabinet. It seems to be locked tight, but the lock is flimsy.
            You can hopefully prise it open with a fragment of wood${game2.resources.wood === 0 ? ", but you have none. Maybe come back later." : ". You reach into your pocket and fish out a small piece of wood. Lucky you didn't burn the wood earlier."}
            `.replaceAll("\n", "");
      },
      actions: [
        {
          name: function(game2) {
            if (game2.resources.ash === 0)
              return "<void>";
            return "read the slip";
          },
          action: function(game2) {
            game2.resources.ash--;
            return {
              game: game2,
              nextEvent: "explorevillage_4_house_slip"
            };
          }
        },
        {
          name: function(game2) {
            if (game2.resources.wood === 0)
              return "<void>";
            return "open the cabinet";
          },
          action: function(game2) {
            game2.resources.wood--;
            return {
              game: game2,
              nextEvent: "explorevillage_4_house_cabinet"
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
    previousEvent: "begin_1",
    resources: {
      wood: 2,
      ash: 0
    }
  };

  // src/save.js
  function saveGame(game2) {
    window.localStorage.setItem("game", JSON.stringify(game2));
  }
  function loadGame() {
    return JSON.parse(window.localStorage.getItem("game") || "{}") ?? structuredClone(gameDefaults);
  }
  async function importGame() {
    return new Promise((resolve, reject) => {
      const importElem = document.createElement("input");
      importElem.setAttribute("type", "file");
      importElem.setAttribute("accept", "application/json");
      importElem.dispatchEvent(new MouseEvent("click"));
      importElem.addEventListener("change", () => {
        const file = importElem.files[0];
        if (file) {
          const reader = new FileReader();
          reader.readAsText(file, "UTF-8");
          reader.addEventListener("load", (event) => {
            resolve(JSON.parse(event.target.result) ?? structuredClone(gameDefaults));
          });
          reader.addEventListener("error", (event) => {
            window.alert("Error loading file.");
          });
        }
      });
    });
  }
  function exportGame(game2) {
    const exportElem = document.createElement("a");
    exportElem.setAttribute("download", "thefarwanderersave" + Date.now() + ".json");
    exportElem.setAttribute("href", "data:application/json," + JSON.stringify(game2));
    exportElem.dispatchEvent(new MouseEvent("click"));
  }

  // src/main.js
  var game = structuredClone(gameDefaults);
  document.getElementById("buttonReset")?.addEventListener("click", () => {
    game = structuredClone(gameDefaults);
    saveGame(game);
    console.log("Game resetted");
    window.location.reload();
  });
  document.getElementById("buttonLoad")?.addEventListener("click", async () => {
    game = await importGame();
    saveGame(game);
    console.log("Game imported");
    window.location.reload();
  });
  document.getElementById("buttonExport")?.addEventListener("click", () => {
    exportGame(game);
    console.log("Game exported");
  });
  Object.assign(game, loadGame());
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
        game.previousEvent = event.id;
        saveGame(game);
        console.log(game);
        loadEvent(events[action.nextEvent]);
      });
      storyActions.appendChild(actionElem);
    }
  }
  loadEvent(events[game.previousEvent]);
})();
