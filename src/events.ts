import { gameStruct } from "./settings.js";

export const events = {
    begin: {
        text: function (game: gameStruct): string {
            return `You wake up on a hard bed. The room is cold and dark, and you feed a persistent, throbbing pain in your head. You don't remember where you are, nor how you got here. As you sit up, you feel a hard, rounded object in your pocket. A pendant. It is made out of a strange, translucent green stone that emits a faint glow. Holding the pendant in your palm, you seem to feel a constant trickle of warmth flowing into your hand. Or maybe it is just your imagination.`;
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
                        nextEvent: "<placeholder>"
                    }
                }
            }
        ]
    }
};

export interface eventStruct {
    text: Function;
    actions: Array<{
        name: Function,
        action: Function
    }>;
}