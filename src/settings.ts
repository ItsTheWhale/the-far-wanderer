export let gameDefaults: gameStruct = {
    started: false,
    resources: {
        wood: 2,
        ash: 0
    }
};

export interface gameStruct {
    started: boolean;
    resources: {
        wood: number;
        ash: number;
    }
};