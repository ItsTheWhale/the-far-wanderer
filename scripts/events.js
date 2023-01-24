export const events = {
    begin: {
        text: function (game) {
            return `You wake up on a hard bed. The room is cold and dark, and you feed a persistent, throbbing pain in your head. You don't remember where you are, nor how you got here. As you sit up, you feel a hard, rounded object in your pocket. A pendant. It is made out of a strange, translucent green stone that emits a faint glow. Holding the pendant in your palm, you seem to feel a constant trickle of warmth flowing from the pendant. Or maybe it is just your imagination.`;
        },
        actions: [
            {
                name: function (game) {
                    return "continue";
                },
                action: function (game) {
                    return {
                        game,
                        nextEvent: "<placeholder>"
                    };
                }
            }
        ]
    }
};
