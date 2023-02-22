export default {
    explorevillage_1_center: {
        id: "explorevillage_1_center",
        text: function (game) {
            return `You walk slowly to the heart of the village. 
            As you go on, houses become bigger and more intact.
            A large monolithic spire of stone materialises from the deep fog, a monument of the forgotten past.`.replaceAll('\n', "");
        },
        actions: [
            {
                name: function (game) {
                    return "continue";
                },
                action: function (game) {
                    return {
                        game,
                        nextEvent: "explorevillage_2_center"
                    };
                }
            }
        ]
    },
    explorevillage_1_edges: {
        id: "explorevillage_1_edges",
        text: function (game) {
            return `You walk away from the center of the village.
            Survived structures become scarcer and smaller, until the sandy floor gives away to an endless plain of grass.
            Out here, only a few structures stand, scattered far along the parched landscape.`.replaceAll('\n', "");
        },
        actions: [
            {
                name: function (game) {
                    return "continue";
                },
                action: function (game) {
                    return {
                        game,
                        nextEvent: "explorevillage_2_edges"
                    };
                }
            }
        ]
    },
    explorevillage_2_center: {
        id: "explorevillage_2_center",
        text: function (game) {
            return `Standing in front of the spire, it towers over you, casting a long, narrow shadow over everything.
            The elements have evidently taken its toll, as long cracks run down the structure after years of wind and rain.
            You spot a small dusty glass door, half covered by pebbles, but still functional.
            You gently push open the door, and the rusted hinges creak, after being opened for the first time in a long while.
            Dust falls from the ceiling as if it was going to collapse, but you gently walk in.`.replaceAll('\n', "");
        },
        actions: [
            {
                name: function (game) {
                    return "continue";
                },
                action: function (game) {
                    return {
                        game,
                        nextEvent: "explorevillage_3_spire"
                    };
                }
            }
        ]
    },
    explorevillage_2_edges: {
        id: "explorevillage_2_edges",
        text: function (game) {
            return `You are far from the village.
            The mist makes it hard to see far, but you spot what looks like an abandoned house in the distance.
            You slowly walk closer.
            You find a small old-fashioned two-story wooden house.
            It seems to be empty, probably abandoned during whatever apocalypse happened to this place.
            A dusty wooden door, paint peeling, hangs invitingly half-open.
            The door creaks as you push it open and step in.`.replaceAll('\n', "");
        },
        actions: [
            {
                name: function (game) {
                    return "continue";
                },
                action: function (game) {
                    return {
                        game,
                        nextEvent: "explorevillage_3_house"
                    };
                }
            }
        ]
    },
    explorevillage_3_spire: {
        id: "explorevillage_3_spire",
        text: function (game) {
            return `
            The spire is obviously abandoned, the crumbling walls plastered with gray dust.
            A long corridor stretches away into the shadows.
            You find a small yellowed memento crudely stuck on the walls, its small black print fading to time.
            You cannot read any of the illegible print, but you could with a pinch of ash${game.resources.ash === 0 ?
                ", but you have none. Maybe come back later." :
                ". You reach into your pocket and fish out a handful of the powder. Lucky you burnt the wood earlier."}
            You notice a small storage room on the side of a corridor. The combination lock is tight, but rusting at its heart.
            You can hopefully prise it open with a fragment of wood${game.resources.wood === 0 ?
                ", but you have none. Maybe come back later." :
                ". You reach into your pocket and fish out a small piece of wood. Lucky you didn't burn the wood earlier."}
            `.replaceAll('\n', "");
        },
        actions: [
            {
                name: function (game) {
                    if (game.resources.ash === 0)
                        return "<void>";
                    return "read the memento";
                },
                action: function (game) {
                    game.resources.ash--;
                    return {
                        game,
                        nextEvent: "explorevillage_4_spire_memento"
                    };
                }
            },
            {
                name: function (game) {
                    if (game.resources.wood === 0)
                        return "<void>";
                    return "open the cabinet";
                },
                action: function (game) {
                    game.resources.wood--;
                    return {
                        game,
                        nextEvent: "explorevillage_4_spire_storage"
                    };
                }
            },
        ]
    },
    explorevillage_3_house: {
        id: "explorevillage_3_house",
        text: function (game) {
            return `
            The old house is obviously abandoned, a thick layer of gray dust covering every surface.
            In the center of the house is a crooked wooden table, nails rusting from disuse.
            You find a small slip of yellowed paper weighted down on the table, its ink fading to time.
            You cannot read any of the illegible ink, but you could with a pinch of ash${game.resources.ash === 0 ?
                ", but you have none. Maybe come back later." :
                ". You reach into your pocket and fish out a handful of the powder. Lucky you burnt the wood earlier."}
            In the corner of your eye, you notice a small cabinet. It seems to be locked tight, but the lock is flimsy.
            You can hopefully prise it open with a fragment of wood${game.resources.wood === 0 ?
                ", but you have none. Maybe come back later." :
                ". You reach into your pocket and fish out a small piece of wood. Lucky you didn't burn the wood earlier."}
            `.replaceAll('\n', "");
        },
        actions: [
            {
                name: function (game) {
                    if (game.resources.ash === 0)
                        return "<void>";
                    return "read the slip";
                },
                action: function (game) {
                    game.resources.ash--;
                    return {
                        game,
                        nextEvent: "explorevillage_4_house_slip"
                    };
                }
            },
            {
                name: function (game) {
                    if (game.resources.wood === 0)
                        return "<void>";
                    return "open the cabinet";
                },
                action: function (game) {
                    game.resources.wood--;
                    return {
                        game,
                        nextEvent: "explorevillage_4_house_cabinet"
                    };
                }
            },
        ]
    },
};
