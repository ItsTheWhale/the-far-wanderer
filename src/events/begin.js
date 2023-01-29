export default {
    begin_1: {
        text: function (game) {
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
                name: function (game) {
                    return "continue";
                },
                action: function (game) {
                    return {
                        game,
                        nextEvent: "begin_2"
                    };
                }
            }
        ]
    },
    begin_2: {
        text: function (game) {
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
                name: function (game) {
                    return "stoke the fire";
                },
                action: function (game) {
                    game.resources.wood = 4;
                    return {
                        game,
                        nextEvent: "begin_3"
                    };
                }
            }
        ]
    },
    begin_3: {
        text: function (game) {
            return `You rub two pieces of wood together to light a fire. 
        You throw a piece of wood into the smoking tinder, and the licking tongues of flame grab it.
        Using the faint light of the flickering fire, you gather the remaining pieces of wood.
        You count 5 in total.
        The wind is still howling outside, and the rain bashing every inch of the land. 
        You decide it is too dangerous to gather more wood outside.`;
        },
        actions: [
            {
                name: function (game) {
                    return "stoke the fire";
                },
                action: function (game) {
                    game.resources.wood--;
                    return {
                        game,
                        nextEvent: "begin_4"
                    };
                }
            }
        ]
    },
    begin_4: {
        text: function (game) {
            return `The storm rages on unabated.
        Water starts to drip from the cracked concrete ceiling, evidence of its disrepair.
        A sudden downpour forces a torrent of water into the room through the open door.
        You quickly shut the door, but only after the floodwater smothers most of the fire.
        Deprived of the outside light, the only thing you can see is the faint glow of the reviving fireplace.
        It will soon be over.`;
        },
        actions: [
            {
                name: function (game) {
                    return "stoke the fire";
                },
                action: function (game) {
                    game.resources.wood--;
                    return {
                        game,
                        nextEvent: "begin_5"
                    };
                }
            }
        ]
    },
    begin_5: {
        text: function (game) {
            return `The fire is flickering. 
        You reach for more wood, but only one piece is left.
        You are hesitating whether to throw it in, or save it for later.
        `;
        },
        actions: [
            {
                name: function (game) {
                    return "stoke the fire";
                },
                action: function (game) {
                    game.resources.wood--;
                    return {
                        game,
                        nextEvent: "begin_6_burn"
                    };
                }
            },
            {
                name: function (game) {
                    return "save the wood";
                },
                action: function (game) {
                    return {
                        game,
                        nextEvent: "begin_6_noburn"
                    };
                }
            },
        ]
    },
    begin_6_burn: {
        text: function (game) {
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
                name: function (game) {
                    return "wait a while";
                },
                action: function (game) {
                    return {
                        game,
                        nextEvent: "begin_7_stay"
                    };
                }
            },
            {
                name: function (game) {
                    return "leave the house";
                },
                action: function (game) {
                    return {
                        game,
                        nextEvent: "begin_7_leave"
                    };
                }
            },
        ]
    },
    begin_6_noburn: {
        text: function (game) {
            return `You resist the temptation and pocket the piece of wood.
        Outside, the torrent of rain is slowing down, the storm abating.
        It is now possible to leave the shelter without too much danger.
        Although you are shivering at the cold, damp air, you have backup fuel in times of need.
        Perhaps saving the wood was worth it after all.
        `;
        },
        actions: [
            {
                name: function (game) {
                    return "wait a while";
                },
                action: function (game) {
                    return {
                        game,
                        nextEvent: "begin_7_stay"
                    };
                }
            },
            {
                name: function (game) {
                    return "leave the house";
                },
                action: function (game) {
                    return {
                        game,
                        nextEvent: "begin_7_leave"
                    };
                }
            },
        ]
    },
    begin_7_stay: {
        text: function (game) {
            return `
        The rain is stopping. Mild rays of sunshine glow through the clouds.
        You feel that it is time to explore your surroundings.
        `;
        },
        actions: [
            {
                name: function (game) {
                    return "leave";
                },
                action: function (game) {
                    return {
                        game,
                        nextEvent: "begin_8"
                    };
                }
            }
        ]
    },
    begin_7_leave: {
        text: function (game) {
            return `You carefully step outside into the rain.
        Although you are soaked, the rain is much weaker than before.
        You look around. You see structures scattered amongst the rubble, survivors of the destruction.
        The mist is too strong, casting a gray blur over everything.
        It is hard to see anything without getting close.
        `;
        },
        actions: [
            {
                name: function (game) {
                    return "explore the center";
                },
                action: function (game) {
                    return {
                        game,
                        nextEvent: "explorevillage_1_center"
                    };
                }
            },
            {
                name: function (game) {
                    return "explore the edges";
                },
                action: function (game) {
                    return {
                        game,
                        nextEvent: "explorevillage_1_edges"
                    };
                }
            },
        ]
    },
    begin_8: {
        text: function (game) {
            return `You carefully step outside. 
        The rain has stopped, but any sunshine that penetrates the thick clouds warm little.
        A heavy mist covers the settlement, blinding everything in view.
        You look around. You see structures scattered amongst the rubble, survivors of the destruction.
        It is hard to see anything without getting close.
        `;
        },
        actions: [
            {
                name: function (game) {
                    return "explore the center";
                },
                action: function (game) {
                    return {
                        game,
                        nextEvent: "explorevillage_1_center"
                    };
                }
            },
            {
                name: function (game) {
                    return "explore the edges";
                },
                action: function (game) {
                    return {
                        game,
                        nextEvent: "explorevillage_1_edges"
                    };
                }
            },
        ]
    },
};
