import { gameStruct } from "../settings.js";

export default {
    explorevillage_1_center: {
        text: function (game: gameStruct): string {
            return `You walk slowly to the heart of the village. 
            As you go on, houses become bigger and more intact.
            A large monolithic spire of stone materialises from the deep fog, a monument of the forgotten past.`;
        },
        actions: [
            {
                name: function (game: gameStruct): string {
                    return "continue";
                },
                action: function (game: gameStruct): {
                    game: gameStruct,
                    nextEvent: any
                } {
                    return {
                        game,
                        nextEvent: "explorevillage_2_center"
                    }
                }
            }
        ]
    },
    explorevillage_1_edges: {
        text: function (game: gameStruct): string {
            return `You walk away from the center of the village.
            Survived structures become scarcer and smaller, until the sandy floor gives away to an endless plain of grass.
            Out here, only a few structures stand, scattered far along the parched landscape.`;
        },
        actions: [
            {
                name: function (game: gameStruct): string {
                    return "continue";
                },
                action: function (game: gameStruct): {
                    game: gameStruct,
                    nextEvent: any
                } {
                    return {
                        game,
                        nextEvent: "explorevillage_2_edges"
                    }
                }
            }
        ]
    },
    explorevillage_2_center: {
        text: function (game: gameStruct): string {
            return `Standing in front of the spire, it towers over you, casting a long, narrow shadow over everything.
            The elements have evidently taken its toll, as long cracks run down the structure after years of wind and rain.
            You spot a small dusty glass door, half covered by pebbles, but still functional.
            You gently push open the door, and the rusted hinges creak, after being opened for the first time in a long while.
            Dust falls from the ceiling as if it was going to collapse, but you gently walk in.`;
        },
        actions: [
            {
                name: function (game: gameStruct): string {
                    return "continue";
                },
                action: function (game: gameStruct): {
                    game: gameStruct,
                    nextEvent: any
                } {
                    return {
                        game,
                        nextEvent: "explorevillage_2_edges"
                    }
                }
            }
        ]
    },
    explorevillage_2_edges: {
        text: function (game: gameStruct): string {
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
                name: function (game: gameStruct): string {
                    return "continue";
                },
                action: function (game: gameStruct): {
                    game: gameStruct,
                    nextEvent: any
                } {
                    return {
                        game,
                        nextEvent: "explorevillage_2_edges"
                    }
                }
            }
        ]
    },
}