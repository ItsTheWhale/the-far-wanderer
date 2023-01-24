export const events = {
    begin: {
        text: function (game) {
            return `text here`;
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
