import { gameDefaults, gameStruct } from "./settings.js";

export function saveGame(game: gameStruct): void {
    window.localStorage.setItem("game", JSON.stringify(game));
}

export function loadGame(): gameStruct {
    return (JSON.parse(window.localStorage.getItem("game") ?? "{}") ?? structuredClone(gameDefaults)) as gameStruct;
}

export function exportGame(game: gameStruct): void {

}