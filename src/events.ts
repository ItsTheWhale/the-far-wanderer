import { gameStruct } from "./settings.js";

export const events = {
    begin_1: {
        text: function (game: gameStruct): string {
            return `You wake up on a hard bed. 
            The room is cold and dark, and you feed a persistent, throbbing pain in your head. 
            You don't remember where you are, nor how you got here. 
            As you sit up, you feel a hard, rounded object in your pocket.
            A pendant. It is made out of a strange, translucent green stone that emits a faint glow in the dark. 
            You turn the pendant around. Engraved on the pendant is an insignia, the elegant twirling lines tracing shapes on the stone. 
            You cannot describe how it exactly looks, but it feels strangely familiar yet distant, as if you have seen it somewhere before.
            Holding the pendant in your palm, you seem to feel a constant trickle of warmth flowing into your hand. 
            Or maybe it is just your imagination.`;
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
                        nextEvent: "begin_2"
                    }
                }
            }
        ]
    },
    begin_2: {
        text: function (game: gameStruct): string {
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
                name: function (game: gameStruct): string {
                    return "stoke the fire";
                },
                action: function (game: gameStruct): {
                    game: gameStruct,
                    nextEvent: any
                } {
                    game.resources.wood = 5;
                    return {
                        game,
                        nextEvent: "begin_3"
                    }
                }
            }
        ]
    },
    begin_3: {
        text: function (game: gameStruct): string {
            return `You rub two pieces of wood together to light a fire. 
            You throw a piece of wood into the smoking tinder, and the licking tongues of flame grab it.
            Using the faint light of the flickering fire, you gather the remaining pieces of wood.
            You count 5 in total.
            The wind is still howling outside, and the rain bashing every inch of the land. 
            You decide it is too dangerous to gather more wood outside.`;
        },
        actions: [
            {
                name: function (game: gameStruct): string {
                    return "stoke the fire";
                },
                action: function (game: gameStruct): {
                    game: gameStruct,
                    nextEvent: any
                } {
                    game.resources.wood--;
                    return {
                        game,
                        nextEvent: "begin_4"
                    }
                }
            }
        ]
    },
};

export interface eventStruct {
    text: Function;
    actions: Array<{
        name: Function,
        action: Function
    }>;
}