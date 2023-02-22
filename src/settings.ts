export let gameDefaults: gameStruct = {
    started: false,
    previousEvent: "begin_1",
    resources: {
        wood: 2,
        ash: 0
    }
};

export interface gameStruct {
    started: boolean;
    previousEvent: string;
    resources: {
        wood: number;
        ash: number;
    }
};