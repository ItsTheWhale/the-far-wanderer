import { gameStruct } from "./settings.js";

export const events = {
    begin: {
        text: function (game: gameStruct): string {
            return `text here`;
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