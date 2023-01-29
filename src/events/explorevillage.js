export default {
    explorevillage_1_center: {
        text: function (game) {
            return `You walk slowly to the heart of the village. 
            As you go on, houses become bigger and more intact.
            A large monolithic spire of stone materialises from the deep fog, a monument to the forgotten past.`;
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
        text: function (game) {
            return `You walk away from the center of the village.
            Survived structures become scarcer and smaller, until the sandy floor gives away to an endless plain of grass.
            Out here, only a few structures stand, scattered far along the parched landscape.`;
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
};
