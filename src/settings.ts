export let gameDefaults: gameStruct = {
    started: false,
    resources: {
        wood: 2
    }
};

export interface gameStruct {
    started: boolean;
    resources: {
        wood: number;
    }
};